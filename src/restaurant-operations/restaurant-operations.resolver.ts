import { Args, Query, Resolver } from '@nestjs/graphql';
import { RestaurantOperation } from './models/restaurant-operation.model';
import { RestaurantOperationsService } from './restaurant-operations.service';

@Resolver()
export class RestaurantOperationsResolver {
  constructor(
    private readonly restaurantOperationService: RestaurantOperationsService,
  ) {}

  @Query(() => [RestaurantOperation])
  async restaurantOperations(
    @Args('restaurantId') restaurantId: number,
  ): Promise<RestaurantOperation[]> {
    const restaurantOperations = await this.restaurantOperationService.findAllByRestaurantId(
      restaurantId,
    );
    return restaurantOperations;
  }
}
