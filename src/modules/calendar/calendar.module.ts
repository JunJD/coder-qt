import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Events } from 'src/entities/calendar/events.entity';
import { EventType } from 'src/entities/calendar/eventType.entity';
import { CalendarController } from './calendar.controller';
import { CalendarService } from './calendar.service';

@Module({
  imports: [TypeOrmModule.forFeature([Events, EventType])],
  controllers: [CalendarController],
  providers: [CalendarService],
})
export class CalendarModule {}
