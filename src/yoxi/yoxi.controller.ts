import {
  Controller,
  Get,
  Query,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { YoxiService } from './yoxi.service'
import { CreateYoxiDto } from './dto/create-yoxi.dto'
import { UpdateYoxiDto } from './dto/update-yoxi.dto'

@Controller('yoxi')
export class YoxiController {
  constructor(private readonly yoxiService: YoxiService) {}

  @Get('riders')
  async findAllRiders(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ) {
    return await this.yoxiService.findAllRiders({ page, limit })
  }

  @Get('rider/:riderId/orders')
  async findOrdersByRiderId(@Param('riderId') riderId: string) {
    return await this.yoxiService.findOrdersByRiderId(riderId)
  }
}
