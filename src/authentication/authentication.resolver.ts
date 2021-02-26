import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { AuthenticationService } from './authentication.service';
import { AccessInfo } from './models/access-info.model';
import { UnauthorizedException } from '@nestjs/common';

@Resolver()
export class AuthenticationResolver {
  constructor(private authenticationService: AuthenticationService) {}

  @Mutation(() => AccessInfo)
  async signInByPassword(
    @Args('username') username: string,
    @Args('password') password: string,
  ): Promise<AccessInfo> {
    const user = await this.authenticationService.validateUser({
      username,
      password,
    });

    if (!user) throw new UnauthorizedException(username);

    return await this.authenticationService.signIn(user);
  }
}
