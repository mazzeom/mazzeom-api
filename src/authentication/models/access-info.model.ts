import { Field, ObjectType } from '@nestjs/graphql';

export type AccessInfoType = 'Bearer';

@ObjectType()
export class AccessInfo {
  @Field()
  type: AccessInfoType;

  @Field()
  accessToken: string;

  @Field()
  refreshToken: string;
}
