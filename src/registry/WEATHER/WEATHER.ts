const WEATHER = {
    TEMPERATURE: {
        FREEZING: {
            value: 'FREEZING',
            label: 'Морозно'
        },

        COLD: {
            value: 'COLD',
            label: 'Холодно'
        },

        COOL: {
            value: 'COOL',
            label: 'Прохладно'
        },

        MILD: {
            value: 'MILD',
            label: 'Умеренно'
        },

        WARM: {
            value: 'WARM',
            label: 'Тепло'
        },

        HOT: {
            value: 'HOT',
            label: 'Жарко'
        }
    },

    WIND_STRENGTH: {
        HURRICANE: {
            value: 'HOT',
            label: 'Ураганный ветер'
        },
        STRONG: {
            value: 'HOT',
            label: 'Сильный ветер'
        },
        MILD: {
            value: 'HOT',
            label: 'Умеренный ветер'
        },
        WEAK: {
            value: 'HOT',
            label: 'Слабый ветер'
        },
        NONE: {
            value: 'HOT',
            label: 'Штиль'
        }
    },

    WIND_DIRECTION: {
        NORD: {
            value: 'NORD',
            label: 'Северный'
        },
        NORD_OST: {
            value: 'NORD_OST',
            label: 'Северо-восточный'
        },
        OST: {
            value: 'OST',
            label: 'Восточный'
        },
        SOUTH_OST: {
            value: 'SOUTH_OST',
            label: 'Юго-восточный'
        },
        SOUTH: {
            value: 'SOUTH',
            label: 'Южный'
        },
        SOUTH_WEST: {
            value: 'SOUTH_WEST',
            label: 'Юго-западный'
        },
        WEST: {
            value: 'WEST',
            label: 'Западный'
        },
        NORD_WEST: {
            value: 'NORD_WEST',
            label: 'Северо-западный'
        }
    }
}

Object.freeze(WEATHER)

export {WEATHER}