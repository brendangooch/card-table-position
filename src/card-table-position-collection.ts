/**
 * 
 */

import { CardTablePosition } from "./card-table-position.js";

export class CardTablePositionCollection {

    private positions: CardTablePosition[] = [];

    public add(position: CardTablePosition): void {
        this.positions.push(position);
    }

    public find(location: number, index: number = 1): CardTablePosition | null {
        const position = this.positions.find(pos => pos.location === location && pos.index === index);
        return (position) ? position : null;
    }

}