import { Injectable } from '@nestjs/common';
import { User } from './models/user.model';
import { users } from './__mocks__/users.mocks';

@Injectable()
export class UsersService {
  async findOne(username: string): Promise<User | undefined> {
    return users.find((user) => user.username === username);
  }
}
