import { Body, Controller, Post } from '@nestjs/common';
import { GeofenceDTO } from './dto/geofence.dto';
import { Geofence } from './model/geofence.model';
import { GeofenceService } from './geofence.service';
import { GeofenceUtils } from './utils/geofence.utils';

@Controller()
export class GeofenceController {
  constructor(private readonly geofenceService: GeofenceService) {}

  @Post("/v1/geofence")
  async geofence(@Body() geofenceDTO: GeofenceDTO) {
    
    const geofence: Geofence = GeofenceUtils.getGeofenceObject(geofenceDTO);
    return await this.geofenceService.processGeofence(geofence);
  }

 
}
