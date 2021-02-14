import { AuthenticationModule } from './authentication/authentication.module';
import { AuthenticationResolver } from './authentication/authentication.resolver';
import { AuthenticationService } from './authentication/authentication.service';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { UsersModule } from './users/users.module';

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
  ],
  providers: [AuthenticationService, AuthenticationResolver],
  exports: [AuthenticationService, JwtModule],
})
export class AppModule {}
