import { Field, ID, ObjectType } from '@nestjs/graphql';

export enum DayOfWeek {
  SUN = 'SUN',
  MON = 'MON',
  TUES = 'TUES',
  WED = 'WED',
  TURS = 'TURS',
  FRI = 'FRI',
  SAT = 'SAT',
}

@ObjectType()
export class RestaurantOperation {
  @Field(() => ID)
  id: number;

  @Field()
  restaurantId: number;

  @Field()
  dayOfWeek: DayOfWeek;

  @Field()
  open: Date;

  @Field()
  close: Date;

  @Field({ defaultValue: new Date() })
  createdAt: Date;

  @Field({ defaultValue: new Date() })
  updatedAt: Date;

  @Field({ nullable: true })
  deletedAt: Date;
}
