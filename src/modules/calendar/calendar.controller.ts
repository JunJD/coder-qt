import { Controller, Get, Post } from '@nestjs/common';
import { EventType } from './../../entities/calendar/eventType.entity';
import { CalendarService } from './calendar.service';

@Controller('calendar')
export class CalendarController {
  constructor(private readonly calendarService: CalendarService) {}
  // 查询所有事件类型
  @Get('type/findAll')
  async findTypeAll(): Promise<Partial<EventType>[]> {
    return this.calendarService.findTypeAll();
  }
}
