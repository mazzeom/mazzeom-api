import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { AuthenticationService } from './authentication.service';
import { AccessInfo } from './models/access-info.model';
import { UnauthorizedException } from '@nestjs/common';
import { UserInput } from '../users/models/userInput.model';

@Resolver()
export class AuthenticationResolver {
  constructor(private authenticationService: AuthenticationService) {}

  @Mutation(() => AccessInfo)
  async signIn(@Args('userInput') userInput: UserInput): Promise<AccessInfo> {
    const { email, password } = userInput;

    const user = await this.authenticationService.validateUser({
      email,
      password,
    });

    if (!user) throw new UnauthorizedException(email);

    return await this.authenticationService.signIn(user);
  }
}
