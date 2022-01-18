import { BadRequestException, Injectable } from '@nestjs/common';
import { Geofence, Geometry } from './model/geofence.model';
import { GeofenceUtils } from './utils/geofence.utils';

@Injectable()
export class GeofenceService {
  private geofence: Geofence;

  constructor() {}

  public processGeofence(geofence: Geofence): Geofence {
    this.setGeofenceObject(geofence);

    if (geofence.deviceCoordinates && this.geofence.geometry.coordinates.length == 0) {
      throw new BadRequestException('No geometry coordinates set');
    }
    if (this.geofence.geometry && geofence.deviceCoordinates) {
      return this.getAreCoordinatesInsideGeofence(geofence);
    }
    return geofence;
  }

  private setGeofenceObject(geofence: Geofence) {
    if (this.geofence == null) {
      this.geofence = geofence;
      return;
    }
    this.geofence.description = geofence.description ? geofence.description : this.geofence.description;
    this.geofence.geometry.type = geofence.geometry.type ? geofence.geometry.type : this.geofence.geometry.type;
    this.geofence.geometry.coordinates = geofence.geometry.coordinates && geofence.geometry.coordinates.length > 0 ? geofence.geometry.coordinates : this.geofence.geometry.coordinates;
  }

  private getAreCoordinatesInsideGeofence(geofence: Geofence): Geofence {
    return {
      description: this.geofence.description,
      deviceCoordinates: geofence.deviceCoordinates,
      isDeviceInside: GeofenceUtils.isInside(
        geofence.deviceCoordinates,
        this.geofence.geometry.coordinates,
      ),
      geometry: {
        type: this.geofence.geometry.type,
        coordinates: this.geofence.geometry.coordinates,
      },
    };
  }
}
