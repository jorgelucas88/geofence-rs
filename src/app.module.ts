import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';

import { GeofenceModule } from './geofence/geofence.module';

@Module({
  imports: [GeofenceModule,
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    })],
  controllers: [],
  providers: [ {
    provide: APP_GUARD,
    useClass: ThrottlerGuard,
  }],
})
export class AppModule {}
