import { Test, TestingModule } from '@nestjs/testing';
import { RestaurantOperationsService } from './restaurant-operations.service';

describe('RestaurantOperationsService', () => {
  let service: RestaurantOperationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RestaurantOperationsService],
    }).compile();

    service = module.get<RestaurantOperationsService>(RestaurantOperationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
