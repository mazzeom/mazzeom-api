import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Restaurant {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  subName: string;

  @Field({ nullable: true })
  countryCode: string;

  @Field({ nullable: true })
  phoneNumber: string;

  @Field({ nullable: true })
  address: string;

  @Field({ nullable: true })
  detailedAddress: string;

  @Field({ nullable: true })
  postCode: string;

  @Field({ nullable: true })
  latitude: number;

  @Field({ nullable: true })
  longitude: number;

  @Field({ defaultValue: new Date() })
  createdAt: Date;

  @Field({ defaultValue: new Date() })
  updatedAt: Date;

  @Field({ nullable: true })
  deletedAt: Date;
}
