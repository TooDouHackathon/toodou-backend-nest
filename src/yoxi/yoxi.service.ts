import { Injectable } from '@nestjs/common'
import { CreateYoxiDto } from './dto/create-yoxi.dto'
import { UpdateYoxiDto } from './dto/update-yoxi.dto'
import { DatabaseService } from 'src/database/database.service'
import { YoxiRider } from 'src/database/entity/Yoxi/YoxiRider.entity'
import { YoxiOrder } from 'src/database/entity/Yoxi/YoxiOrder.entity'

@Injectable()
export class YoxiService {
  constructor(private readonly databaseService: DatabaseService) {}

  async findAllRiders({ page, limit }: { page: number; limit: number }) {
    const offset = (page - 1) * limit
    const [data, total] = await this.databaseService.connection
      .getRepository(YoxiRider)
      .findAndCount({
        skip: offset,
        take: limit,
      })

    return {
      data,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    }
  }

  async findOrdersByRiderId(id: string) {
    const riders = await this.databaseService.connection
      .getRepository(YoxiOrder)
      .find({
        where: {
          riderId: id,
        },
      })

    return riders
  }
}
