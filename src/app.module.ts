import { Module } from '@nestjs/common';

import { GeofenceModule } from './geofence/geofence.module';

@Module({
  imports: [GeofenceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
