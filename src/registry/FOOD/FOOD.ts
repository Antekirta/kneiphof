interface IFood {
    [index: string]: { value: string, label: string }
}

const FOOD: IFood = {
    // meat
    BEEF: {
        value: 'BEEF',
        label: 'Говядина'
    },
    CHICKEN: {
        value: 'CHICKEN',
        label: 'Курица'
    },

    DEER_MEAT: {
        value: 'DEER_MEAT',
        label: 'Оленина'
    },

    DOG_MEAT: {
        value: 'DOG_MEAT',
        label: 'Собачатина'
    },

    HORSE_MEAT: {
        value: 'HORSE_MEAT',
        label: 'Конина'
    },

    PORK: {
        value: 'PORK',
        label: 'Свинина'
    },
}

Object.freeze(FOOD)

export {FOOD}