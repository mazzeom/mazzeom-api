import { NotFoundException } from '@nestjs/common';
import { Args, Resolver, Query } from '@nestjs/graphql';
import { Restaurant } from './models/restaurant.model';
import { RestaurantsService } from './restaurants.service';

@Resolver(() => Restaurant)
export class RestaurantsResolver {
  constructor(private readonly restaurantService: RestaurantsService) {}

  @Query(() => Restaurant)
  async restaurant(@Args('id') id: number): Promise<Restaurant> {
    const restaurant = await this.restaurantService.findOneById(id);
    if (!restaurant) throw new NotFoundException(id);
    return restaurant;
  }
}
