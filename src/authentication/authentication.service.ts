import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/models/user.model';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthenticationService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser({
    username,
    password,
  }: Pick<User, 'username' | 'password'>): Promise<Pick<
    User,
    'id' | 'username'
  > | null> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === password) {
      const { id, username } = user;
      return { id, username };
    }
    return null;
  }

  async signIn({
    id,
    username,
  }: Pick<User, 'id' | 'username'>): Promise<{ accessToken: string }> {
    const payload = { id, username };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
