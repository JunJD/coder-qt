import { IsString, IsInt } from 'class-validator';

export class CreateEventDto {
  @IsString()
  readonly eventsName: string;

  @IsString()
  readonly startDateTime: string;

  @IsString()
  readonly endDateTime: string;

  @IsInt()
  readonly eventTypeId: number;

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
