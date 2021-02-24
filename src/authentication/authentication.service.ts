import * as bcrypt from 'bcrypt';

import { AccessInfo } from './models/access-info.model';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/models/user.model';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthenticationService {
  private saltOrRounds;

  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {
    this.saltOrRounds = parseInt(process.env.SALT_OR_ROUNDS, 10);
  }

  async validateUser({
    email,
    password,
  }: Pick<User, 'email' | 'password'>): Promise<Pick<
    User,
    'id' | 'email'
  > | null> {
    const user = await this.usersService.findOne(email);

    if (user && bcrypt.compare(password, user.password)) {
      const { id, email } = user;
      return { id, email };
    }
    return null;
  }

  async signIn({ id, email }: Pick<User, 'id' | 'email'>): Promise<AccessInfo> {
    const payload = { id, email };
    return {
      type: 'Bearer',
      accessToken: this.jwtService.sign(payload),
      refreshToken: this.jwtService.sign(payload), // TO-DO Refresh Token
    };
  }

  async getHash(password: string) {
    return await bcrypt.hash(password, this.saltOrRounds);
  }
}
