import { Injectable } from '@nestjs/common';
import { Restaurant } from './models/restaurant.model';
import { restaurants } from './__mocks__/restaurants.mocks';

@Injectable()
export class RestaurantsService {
  async findOneById(id: number): Promise<Restaurant> {
    return restaurants.find((restaurant) => restaurant.id === id);
  }
}
