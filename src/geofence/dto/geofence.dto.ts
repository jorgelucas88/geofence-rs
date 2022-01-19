import { ApiProperty } from "@nestjs/swagger";

class Coordinates {
    
    @ApiProperty()
    readonly x: number;
    
    @ApiProperty()
    readonly y: number;
}

export class Geometry {
    
    @ApiProperty()
    readonly type: string;
    
    @ApiProperty({ type: [Coordinates] })
    readonly coordinates: Coordinates[][];
}

export class GeofenceDTO {
    @ApiProperty()
    readonly description?: string;

    @ApiProperty()
    readonly geometry?: Geometry;
    
    @ApiProperty()
    readonly deviceCoordinates?: Coordinates;
}