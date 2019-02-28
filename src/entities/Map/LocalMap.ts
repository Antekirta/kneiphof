interface Cell {
    x: number,
    y: number
}

class LocalMap {
    public occupiedCells = new Map()
    
    constructor(private width: number = 2000,
                private height: number = 1000,
                private cellSize: number = 10) {
    }

    /**
     * Return cell coords based on random coords
     * @param {Cell} coords
     * @returns {Cell}
     */
    getCellsCoords(coords: Cell): Cell {
        if (coords.x > this.width || coords.y > this.height) {
            throw new Error('You are trying to leave the map!')
        }

        return {
            x: Math.floor(coords.x / this.cellSize),

            y: Math.floor(coords.y / this.cellSize)
        }
    }
    
    occupyCell (cell: Cell, occupant: any) {
        this.occupiedCells.set(cell, occupant)
    }
    
    isCellOccupied (cell: Cell): boolean {
        return this.occupiedCells.has(cell)
    }
    
    getCellOccupant (cell: Cell): any {
        return this.occupiedCells.get(cell)
    }
}

const localMap = new LocalMap()

export {localMap}