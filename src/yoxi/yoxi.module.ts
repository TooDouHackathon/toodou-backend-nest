import { Module } from '@nestjs/common';
import { YoxiService } from './yoxi.service';
import { YoxiController } from './yoxi.controller';

@Module({
  controllers: [YoxiController],
  providers: [YoxiService],
})
export class YoxiModule {}
