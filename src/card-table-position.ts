/**
 * represents a position (x, y coordinates), rotation, and scale of a screen entity in a game of cards
 */

import type { tPositionAndRotation, tTablePositionProperties } from "./index.js";
import { Vector2D } from "@brendangooch/maths";
import { randomValueOffset } from "@brendangooch/random";

export class CardTablePosition {

    private properties: tTablePositionProperties;

    public constructor(props: tTablePositionProperties) {
        this.properties = { ...props };
        if (props.offsetOnCreate !== null) this.offset(props.offsetOnCreate);
    }

    public get location(): number {
        return this.properties.location;
    }

    public get index(): number {
        return this.properties.index;
    }

    public get vector(): Vector2D {
        return new Vector2D(this.x, this.y);
    }

    public get x(): number {
        return (this.doOffsetX) ? randomValueOffset(this.properties.current.x, this.properties.offsetEvery!.x) : this.properties.current.x;
    }

    public get y(): number {
        return (this.doOffsetY) ? randomValueOffset(this.properties.current.y, this.properties.offsetEvery!.y) : this.properties.current.y;
    }

    public get rotation(): number {
        return (this.doOffsetRotation) ? randomValueOffset(this.properties.current.rotation, this.properties.offsetEvery!.rotation) : this.properties.current.rotation;
    }

    public get scale(): number {
        return this.properties.scale;
    }

    public offset(offset: tPositionAndRotation): void {
        if (offset.x !== 0) this.properties.current.x = randomValueOffset(this.properties.current.x, offset.x);
        if (offset.y !== 0) this.properties.current.y = randomValueOffset(this.properties.current.y, offset.y);
        if (offset.rotation !== 0) this.properties.current.rotation = randomValueOffset(this.properties.current.rotation, offset.rotation);
    }

    private get doOffsetX(): boolean {
        return this.doOffsetEvery && this.properties.offsetEvery!.x > 0;
    }

    private get doOffsetY(): boolean {
        return this.doOffsetEvery && this.properties.offsetEvery!.y > 0;
    }

    private get doOffsetRotation(): boolean {
        return this.doOffsetEvery && this.properties.offsetEvery!.rotation > 0;
    }

    private get doOffsetEvery(): boolean {
        return this.properties.offsetEvery !== null;
    }

}