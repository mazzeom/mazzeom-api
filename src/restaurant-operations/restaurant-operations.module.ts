import { Module } from '@nestjs/common';
import { RestaurantOperationsResolver } from './restaurant-operations.resolver';
import { RestaurantOperationsService } from './restaurant-operations.service';

@Module({
  providers: [RestaurantOperationsResolver, RestaurantOperationsService],
})
export class RestaurantOperationsModule {}
