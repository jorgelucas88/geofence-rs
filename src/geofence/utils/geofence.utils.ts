import { GeofenceDTO, Geometry } from '../dto/geofence.dto';
import { Coordinates, Geofence } from '../model/geofence.model';

export class GeofenceUtils {
  public static getGeofenceObject(geofence: GeofenceDTO): Geofence {
    const g: Geofence = {
      description: geofence.description,
      deviceCoordinates: geofence.deviceCoordinates,
      geometry: {
        type: geofence.geometry?.type,
        coordinates: geofence.geometry?.coordinates[0],
      },
    };

    let coordinates: Coordinates[] = [];
    g?.geometry?.coordinates?.forEach((f) => {
      coordinates.push({ x: f[0], y: f[1] });
    });
    g.geometry.coordinates = coordinates;

    return g;
  }

  // https://stackoverflow.com/questions/22521982/check-if-point-is-inside-a-polygon
  public static isInside(point: Coordinates, vs: Coordinates[]): boolean {
    // ray-casting algorithm based on
    // https://wrf.ecse.rpi.edu/Research/Short_Notes/pnpoly.html/pnpoly.html

    var x: number = point.x,
      y: number = point.y;

    var inside: boolean = false;
    for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
      var xi = vs[i].x,
        yi = vs[i].y;
      var xj = vs[j].x,
        yj = vs[j].y;
      var intersect: boolean =
        yi > y != yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
      if (intersect) inside = !inside;
    }

    return inside;
  }
}
