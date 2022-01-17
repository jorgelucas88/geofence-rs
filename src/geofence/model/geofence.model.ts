export interface Geofence {
    description?: string;
    geometry?: Geometry;
    deviceCoordinates?: Coordinates;
    isDeviceInside?: boolean
}

export interface Geometry {
    type: string;
    coordinates: Coordinates[];
}

export interface Coordinates {
    x: number;
    y: number;
}
