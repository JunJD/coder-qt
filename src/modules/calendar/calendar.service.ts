import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EventType } from './../../entities/calendar/eventType.entity';
import { Repository } from 'typeorm';
import { Events } from 'src/entities/calendar/events.entity';
import { CreateEventDto } from './dto/createEvents.dto';
import { UsersService } from '../users/users.service';
import { findEventDto } from './dto/findEventsByPhone.dto';

@Injectable()
export class CalendarService {
  constructor(
    private usersService: UsersService,
    @InjectRepository(EventType)
    private readonly eventTypeRepository: Repository<EventType>,
    @InjectRepository(Events)
    private readonly eventsRepository: Repository<Events>,
  ) {}

  // 查询所有事件类型
  async findTypeAll(): Promise<EventType[]> {
    return await this.eventTypeRepository.find();
  }

  // 新增事件
  async addEvent(createEventDto: CreateEventDto): Promise<Events> {
    // 创建事件
    const event = new Events();
    event.eventsName = createEventDto.eventsName;
    event.startDateTime = createEventDto.startDateTime;
    event.endDateTime = createEventDto.endDateTime;
    // event.allDay = createEventDto.allDay;
    event.location = createEventDto.location;
    event.description = createEventDto.description;
    event.status = createEventDto.status;
    // 根据事件类型id查询事件类型
    const eventType = await this.findTypeById(createEventDto.eventTypeId);
    event.eventType = eventType;
    // 根据创建者id查询创建者
    const creator = await this.usersService.findOneByPhone(
      createEventDto.creatorId,
    );
    event.creator = creator;
    event.user = creator;
    return await this.eventsRepository.save(event);
  }

  // 批量新增事件

  // 批量新增事件
  async addEvents(createEventsDto: CreateEventDto[]): Promise<Events[]> {
    const events: Events[] = [];
    for (const createEventDto of createEventsDto) {
      const event = new Events();
      event.eventsName = createEventDto.eventsName;
      event.startDateTime = createEventDto.startDateTime;
      event.endDateTime = createEventDto.endDateTime;
      // event.allDay = createEventDto.allDay;
      event.location = createEventDto.location;
      event.description = createEventDto.description;
      event.status = createEventDto.status;
      // 根据事件类型id查询事件类型
      const eventType = await this.findTypeById(createEventDto.eventTypeId);
      event.eventType = eventType;
      // 根据创建者id查询创建者
      const creator = await this.usersService.findOneByPhone(
        createEventDto.creatorId,
      );
      event.creator = creator;
      event.user = creator;
      events.push(event);
    }
    return await this.eventsRepository.save(events);
  }

  // 根据数据库现有条件任何条件查询事件
  async findEvent(dto: findEventDto): Promise<Events[]> {
    return await this.eventsRepository.find({
      where: { ...dto },
      relations: ['eventType', 'creator'],
    });
  }

  // 筛选startDateTime和endDateTime在start和end之间的事件，并使用其他条件筛选
  async findEventBetween(dto: findEventDto): Promise<Events[]> {
    const events = await this.eventsRepository
      .createQueryBuilder('events')
      .where('events.startDateTime >= :start', { start: dto.start })
      .andWhere('events.endDateTime <= :end', { end: dto.end })
      // 关联创建人
      .leftJoinAndSelect('events.creator', 'creator')
      // 关联事件类型
      .leftJoinAndSelect('events.eventType', 'eventType')
      .getMany();
    return events.filter((event) => {
      console.log(
        event.creator.phoneNumber,
        dto.creatorId,
        event.creator.phoneNumber === String(dto.creatorId),
      );
      return (
        event.creator.phoneNumber === String(dto.creatorId) &&
        event.eventType.eventTypeId === dto.eventTypeId
      );
      // 筛选其他条件
    });
  }

  // 根据事件类型id查询事件类型
  async findTypeById(id: string): Promise<EventType> {
    return await this.eventTypeRepository.findOne({
      where: { eventTypeId: id },
    });
  }
}
