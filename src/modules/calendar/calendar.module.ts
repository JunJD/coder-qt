import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Events } from 'src/entities/calendar/events.entity';
import { EventType } from 'src/entities/calendar/eventType.entity';
import { UsersModule } from '../users/users.module';
import { CalendarController } from './calendar.controller';
import { CalendarService } from './calendar.service';

@Module({
  imports: [TypeOrmModule.forFeature([Events, EventType]), UsersModule],
  controllers: [CalendarController],
  providers: [CalendarService],
})
export class CalendarModule {}
