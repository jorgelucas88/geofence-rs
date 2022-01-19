import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { TerminusModule } from '@nestjs/terminus';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';

import { GeofenceModule } from './geofence/geofence.module';
import { HealthController } from './health/health.controller';

@Module({
  imports: [GeofenceModule,
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
    TerminusModule, HttpModule],
  controllers: [HealthController],
  providers: [ {
    provide: APP_GUARD,
    useClass: ThrottlerGuard,
  }],
})
export class AppModule {}
