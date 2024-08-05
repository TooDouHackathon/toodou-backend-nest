import { Injectable } from '@nestjs/common';
import { CreateYoxiDto } from './dto/create-yoxi.dto';
import { UpdateYoxiDto } from './dto/update-yoxi.dto';

@Injectable()
export class YoxiService {
  create(createYoxiDto: CreateYoxiDto) {
    return 'This action adds a new yoxi';
  }

  findAll() {
    return `This action returns all yoxi`;
  }

  findOne(id: number) {
    return `This action returns a #${id} yoxi`;
  }

  update(id: number, updateYoxiDto: UpdateYoxiDto) {
    return `This action updates a #${id} yoxi`;
  }

  remove(id: number) {
    return `This action removes a #${id} yoxi`;
  }
}
