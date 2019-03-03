interface IResources {
    [index: string]: { value: string, label: string }
}

const RESOURCES: IResources = {
    // wood
    SPRUCE: {
        value: 'SPRUCE',
        label: 'ель'
    },
    PINE: {
        value: 'PINE',
        label: 'сосна'
    },
    OAK: {
        value: 'OAK',
        label: 'дуб'
    },
    MAPLE: {
        value: 'MAPLE',
        label: 'клен'
    },
    BIRCH_TREE: {
        value: 'BIRCH_TREE',
        label: 'береза'
    }
}

Object.freeze(RESOURCES)

export {RESOURCES}