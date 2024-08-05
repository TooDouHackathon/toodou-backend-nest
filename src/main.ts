import 'reflect-metadata'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ConfigService } from '@nestjs/config'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import fs from 'fs'
import { Logger } from '@nestjs/common'
import OrgData from './database/data/Organization.json'

const logger = new Logger()

const checkAndCreateFolder = (folderPath: string) => {
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath)
    logger.log(`directory created: ${folderPath}`, 'bootstrap')
  } else {
    logger.log(`directory already exists: ${folderPath}`, 'bootstrap')
  }
}

const refillOrgDirectories = async () => {
  const storage_path = process.env.internal_storage_directory

  const orgs = await fs.readdirSync(storage_path)

  for (let i = 0; i < orgs.length; i++) {
    const folders = [
      storage_path,
      `${storage_path}/${orgs[i]}`,
      `${storage_path}/${orgs[i]}/${process.env.internal_story_layer_storage_directory}`,
      `${storage_path}/${orgs[i]}/${process.env.internal_story_layer_backup_storage_directory}`,
      `${storage_path}/${orgs[i]}/${process.env.internal_vector_layer_storage_directory}`,
      `${storage_path}/${orgs[i]}/${process.env.internal_assets_storage_directory}`,
    ]
    folders.forEach((folder) => {
      checkAndCreateFolder(folder)
    })
  }
}

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule)
  const configService = app.get(ConfigService)
  const storage_path = process.env.internal_storage_directory

  const folders = [
    storage_path,
    `${storage_path}/${OrgData.code}`,
    `${storage_path}/${OrgData.code}/${process.env.internal_story_layer_storage_directory}`,
    `${storage_path}/${OrgData.code}/${process.env.internal_story_layer_backup_storage_directory}`,
    `${storage_path}/${OrgData.code}/${process.env.internal_vector_layer_storage_directory}`,
    `${storage_path}/${OrgData.code}/${process.env.internal_assets_storage_directory}`,
  ]
  app.setGlobalPrefix('api')
  app.enableCors()

  // Setup Swagger
  const config = new DocumentBuilder()
    .setTitle('Mapelon API')
    .setDescription('The Mapelon API description')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)

  folders.forEach((folder) => {
    checkAndCreateFolder(folder)
  })
  await refillOrgDirectories()

  await app.listen(configService.get('http_port') || 3000)
}

bootstrap()
