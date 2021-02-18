import { Test, TestingModule } from '@nestjs/testing';
import { RestaurantOperationsResolver } from './restaurant-operations.resolver';

describe('RestaurantOperationsResolver', () => {
  let resolver: RestaurantOperationsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RestaurantOperationsResolver],
    }).compile();

    resolver = module.get<RestaurantOperationsResolver>(RestaurantOperationsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
