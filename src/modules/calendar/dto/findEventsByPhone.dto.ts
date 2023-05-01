import { PartialType } from '@nestjs/swagger';
import { CreateEventDto } from './createEvents.dto';

export class findEventDto extends PartialType(CreateEventDto) {
  // 查询范围
  readonly start = new Date();
  readonly end = new Date();
}
