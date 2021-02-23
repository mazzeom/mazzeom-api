import { AuthenticationModule } from './authentication/authentication.module';
import { AuthenticationResolver } from './authentication/authentication.resolver';
import { AuthenticationService } from './authentication/authentication.service';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { RestaurantOperationsModule } from './restaurant-operations/restaurant-operations.module';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
    }),
    RestaurantsModule,
    UsersModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '30m' },
    }),
    AuthenticationModule,
    RestaurantOperationsModule,
  ],
  providers: [AuthenticationService, AuthenticationResolver, PrismaService],
  exports: [AuthenticationService, JwtModule],
})
export class AppModule {}
