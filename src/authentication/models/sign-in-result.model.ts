import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SignInResult {
  @Field()
  accessToken: string;
}
