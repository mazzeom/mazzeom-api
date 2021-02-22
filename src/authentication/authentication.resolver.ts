import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { AuthenticationService } from './authentication.service';
import { SignInResult } from './models/sign-in-result.model';
import { UnauthorizedException } from '@nestjs/common';
import { UserInput } from '../users/models/userInput.model';

@Resolver()
export class AuthenticationResolver {
  constructor(private authenticationService: AuthenticationService) {}

  @Mutation(() => SignInResult)
  async signIn(@Args('userInput') userInput: UserInput): Promise<SignInResult> {
    const { username, password } = userInput;

    const user = await this.authenticationService.validateUser({
      username,
      password,
    });

    if (!user) throw new UnauthorizedException(username);

    return await this.authenticationService.signIn(user);
  }
}
