import { IsString, IsInt } from 'class-validator';

export class CreateEventDto {
  @IsString()
  readonly eventsName: string;

  @IsString()
  readonly startDateTime: Date;

  @IsString()
  readonly endDateTime: Date;

  @IsInt()
  readonly eventTypeId: string;

  @IsString()
  readonly location: string;

  @IsString()
  readonly description: string;

  @IsString()
  readonly status: string;

  @IsString()
  readonly creatorId: string;

  @IsString()
  readonly updaterId: string;
}
