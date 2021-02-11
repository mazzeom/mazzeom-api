import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
import { RestaurantsModule } from './restaurants/restaurants.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
    }),
    RestaurantsModule,
  ],
})
export class AppModule {}
