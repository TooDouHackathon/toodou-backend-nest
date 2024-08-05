import { Module } from '@nestjs/common'
import { YoxiService } from './yoxi.service'
import { YoxiController } from './yoxi.controller'
import { DatabaseModule } from 'src/database/database.module'

@Module({
  imports: [DatabaseModule],
  controllers: [YoxiController],
  providers: [YoxiService],
})
export class YoxiModule {}
