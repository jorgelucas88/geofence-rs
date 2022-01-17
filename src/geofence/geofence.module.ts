import { Module } from '@nestjs/common';
import { GeofenceController } from './geofence.controller';
import { GeofenceService } from './geofence.service';

@Module({
  imports: [],
  controllers: [GeofenceController],
  providers: [GeofenceService],
  exports: [],
})
export class GeofenceModule {}
