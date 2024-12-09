/**
 * preloads some of the properties of a cardTablePosition object to assist in the creation of a custom table layout for a game of cards
 */

import type { tPositionAndRotation, tTablePositionProperties } from "./index.js";
import { Vector2D } from "@brendangooch/maths";
import { CardTablePosition } from "./card-table-position.js";


export class CardTablePositionBuilder {

    protected currentBuild: tTablePositionProperties = this.props;

    public location(location: number): CardTablePositionBuilder {
        this.currentBuild.location = location;
        return this;
    }

    public index(index: number): CardTablePositionBuilder {
        this.currentBuild.index = index;
        return this;
    }

    public position(vector: Vector2D): CardTablePositionBuilder {
        this.currentBuild.current.x = vector.x;
        this.currentBuild.current.y = vector.y;
        return this;
    }

    public x(x: number): CardTablePositionBuilder {
        this.currentBuild.current.x = x;
        return this;
    }

    public y(y: number): CardTablePositionBuilder {
        this.currentBuild.current.y = y;
        return this;
    }

    public rotation(rotation: number): CardTablePositionBuilder {
        this.currentBuild.current.rotation = rotation;
        return this;
    }

    public scale(scale: number): CardTablePositionBuilder {
        this.currentBuild.scale = scale;
        return this;
    }

    public offsetEvery(offset: tPositionAndRotation): CardTablePositionBuilder {
        this.currentBuild.offsetEvery = offset;
        return this;
    }

    public offsetOnCreate(offset: tPositionAndRotation): CardTablePositionBuilder {
        this.currentBuild.offsetOnCreate = offset;
        return this;
    }

    public build(): CardTablePosition {
        const tablePosition = new CardTablePosition(this.props);
        this.reset();
        return tablePosition;
    }

    private get props(): tTablePositionProperties {
        return {
            location: 0,
            index: 0,
            current: {
                x: 0,
                y: 0,
                rotation: 0
            },
            offsetEvery: null,
            offsetOnCreate: null,
            scale: 1
        }
    }

    private reset(): void {
        this.currentBuild = this.props;
    }

}