interface IResources {
    [index: string]: { value: string, label: string }
}

const RESOURCES: IResources = {
    // wood
    SPRUCE: {
        value: 'SPRUCE',
        label: 'Ель'
    },
    PINE: {
        value: 'PINE',
        label: 'Сосна'
    },
    OAK: {
        value: 'OAK',
        label: 'Дуб'
    },
    MAPLE: {
        value: 'MAPLE',
        label: 'Клен'
    },
    BIRCH_TREE: {
        value: 'BIRCH_TREE',
        label: 'Береза'
    }
}

Object.freeze(RESOURCES)

export {RESOURCES}