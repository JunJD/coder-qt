import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { EventType } from './../../entities/calendar/eventType.entity';
import { CalendarService } from './calendar.service';
import { CreateEventDto } from './dto/createEvents.dto';
import { findEventDto } from './dto/findEventsByPhone.dto';
import { UpdateEventDto } from './dto/updateEventDto.dto';

@Controller('calendar')
export class CalendarController {
  constructor(private readonly calendarService: CalendarService) {}
  // 查询所有事件类型
  @Get('type/findAll')
  async findTypeAll(): Promise<Partial<EventType>[]> {
    return this.calendarService.findTypeAll();
  }

  // 新增事件
  @Post('add')
  async addEvent(@Req() req): Promise<any> {
    const createEventDto: CreateEventDto = req.body;

    return this.calendarService.addEvent({
      ...createEventDto,
      creatorId: req.user.sub,
    });
  }

  // 批量新增事件
  @Post('add/batch')
  async addEvents(@Req() req): Promise<any> {
    const createEventDtos: CreateEventDto[] = req.body;

    const events = createEventDtos.map((createEventDto) => ({
      ...createEventDto,
      creatorId: req.user.sub,
    }));

    return this.calendarService.addEvents(events);
  }

  // 删除事件
  @Post('delete')
  async deleteEvent(@Body() dto: UpdateEventDto): Promise<any> {
    return this.calendarService.deleteEvent(dto.id);
  }

  // 编辑事件
  @Post('edit')
  async editEvent(@Body() dto: UpdateEventDto): Promise<any> {
    return this.calendarService.editEvent(dto);
  }

  @Post()
  // 根据任何条件查询事件
  @Post('find')
  async findEvent(@Body() dto: findEventDto): Promise<any> {
    return this.calendarService.findEvent(dto);
  }

  // 查询start到end时间段内的事件
  @Post('findBetween')
  async findEventBetween(@Body() dto: findEventDto): Promise<any> {
    return this.calendarService.findEventBetween(dto);
  }
}
