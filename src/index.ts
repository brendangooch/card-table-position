/**
 * package barrel file
 */

export type tPosition = { x: number; y: number };
export type tPositionAndRotation = tPosition & { rotation: number };
export type tTablePositionProperties = {
    location: number;
    index: number;
    current: tPositionAndRotation;
    offsetEvery: tPositionAndRotation | null;
    offsetOnCreate: tPositionAndRotation | null;
    scale: number;
};

export { CardTablePosition } from "./card-table-position.js";
export { CardTablePositionCollection } from "./card-table-position-collection.js";
export { CardTablePositionBuilder } from "./card-table-position-builder.js";