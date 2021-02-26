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
    username,
    password,
  }: Pick<User, 'username' | 'password'>): Promise<Pick<
    User,
    'id' | 'username'
  > | null> {
    const user = await this.usersService.findOne(username);

    if (user && bcrypt.compare(password, user.password)) {
      const { id, username } = user;
      return { id, username };
    }
    return null;
  }

  async signIn({
    id,
    username,
  }: Pick<User, 'id' | 'username'>): Promise<AccessInfo> {
    const payload = { id, username };
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
