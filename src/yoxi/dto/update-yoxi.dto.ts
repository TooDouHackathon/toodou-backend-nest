import { PartialType } from '@nestjs/swagger';
import { CreateYoxiDto } from './create-yoxi.dto';

export class UpdateYoxiDto extends PartialType(CreateYoxiDto) {}
