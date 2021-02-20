import { Injectable } from '@nestjs/common';
import { RestaurantOperation } from './models/restaurant-operation.model';
import { restaurantOperations } from './__mocks__/restaurant-operations';

@Injectable()
export class RestaurantOperationsService {
  async findAllByRestaurantId(id: number): Promise<RestaurantOperation[]> {
    return restaurantOperations.filter(
      ({ restaurantId }) => restaurantId === id,
    );
  }
}
