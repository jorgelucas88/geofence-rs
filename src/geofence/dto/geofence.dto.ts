export interface GeofenceDTO {
    readonly description?: string;
    readonly geometry?: Geometry;
    readonly deviceCoordinates?: Coordinates;
}

export interface Geometry {
    readonly type: string;
    readonly coordinates: Coordinates[][];
}

interface Coordinates {
    readonly x: number;
    readonly y: number;
}
