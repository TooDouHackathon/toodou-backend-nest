import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import commandLineArgs from 'command-line-args'
import { join } from 'path'
import { DatabaseModule } from './database/database.module'
import { CacheModule } from './cache/cache.module'
import { ServeStaticModule } from '@nestjs/serve-static'
import { config } from 'dotenv'
import { YoxiModule } from './yoxi/yoxi.module';

const options = commandLineArgs([
  {
    name: 'env',
    alias: 'e',
    defaultValue: 'development',
    type: String,
  },
])

config({
  path: join(__dirname, `../.config/.env.${options.env}`),
})

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: join(__dirname, `../.config/.env.${options.env}`),
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', process.env.internal_storage_directory),
      serveRoot: process.env.public_storage_directory,
    }),
    DatabaseModule,
    CacheModule,
    YoxiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
