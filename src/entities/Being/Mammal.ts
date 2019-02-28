type furType = 'thin' | 'thick' | 'none'
type dietType = 'predator' | 'herbivore' | 'omnivorous'

class Mammal {
    private calories = 2000
    x = 0
    y = 0

    constructor(private name: string,
                private species: string,
                private weight: number, // kg
                private width: number, // m
                private height: number, // m
                private caloriesPerHour: number,
                private maxSpeed: number, // km per hour
                private normalSpeed: number, // km per hour
                private strength: number, // kilograms count to move

                private legsCount: number,
                private fur: furType,
                private horns: number,
                private dietType: dietType) {
    }
    
    place (x: number, y: number) {
        this.x = x
        this.y = y
    }

    static createDog(name: string) {
        return new Mammal(
            name,
            'dog',

            30,
            0.4,
            0.6,
            75,

            40,
            10,
            150,

            4,
            'thin',
            0,

            'predator'
        )
    }
}

export {Mammal}