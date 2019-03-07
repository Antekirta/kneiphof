interface IWeather {
    [index: string]: {
        [index: string]: {
            value: string,
            label: string
        }
    }
}

const WEATHER: IWeather = {
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

    PRECIPITATION: {
        HAIL: {
            value: 'HAIL',
            label: 'Град'
        },

        BLIZZARD: {
            value: 'BLIZZARD',
            label: 'Метель'
        },

        SNOW: {
            value: 'SNOW',
            label: 'Снег'
        },

        SHOWER: {
            value: 'SHOWER',
            label: 'Ливень'
        },

        RAIN: {
            value: 'RAIN',
            label: 'Дождь'
        },

        LIGHT_RAIN: {
            value: 'LIGHT_RAIN',
            label: 'Слабый дождик'
        },

        DRY: {
            value: 'DRY',
            label: 'Сухо'
        }
    },

    WIND_STRENGTH: {
        HURRICANE: {
            value: 'HURRICANE',
            label: 'Ураганный ветер'
        },
        STRONG: {
            value: 'STRONG',
            label: 'Сильный ветер'
        },
        MILD: {
            value: 'MILD',
            label: 'Умеренный ветер'
        },
        WEAK: {
            value: 'WEAK',
            label: 'Слабый ветер'
        },
        NONE: {
            value: 'NONE',
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