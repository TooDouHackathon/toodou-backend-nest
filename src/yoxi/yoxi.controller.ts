import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { YoxiService } from './yoxi.service';
import { CreateYoxiDto } from './dto/create-yoxi.dto';
import { UpdateYoxiDto } from './dto/update-yoxi.dto';

@Controller('yoxi')
export class YoxiController {
  constructor(private readonly yoxiService: YoxiService) {}

  @Post()
  create(@Body() createYoxiDto: CreateYoxiDto) {
    return this.yoxiService.create(createYoxiDto);
  }

  @Get()
  findAll() {
    return this.yoxiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.yoxiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateYoxiDto: UpdateYoxiDto) {
    return this.yoxiService.update(+id, updateYoxiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.yoxiService.remove(+id);
  }
}
