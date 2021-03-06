export const task = {
    DEFAULT_VALUES: {
        type: 'Opret ny',
        time: 'Vælg tidsramme',
        interval: 'Vælg interval',
        weekday: 'Vælg ugedag',
        yearlyDate: 'Vælg måned',
        monthDay: 'Vælg dag',
        date: '',
        task: '',
        name: '',
        description: '',
        category: 'Vælg kategori',
        timeStamp: '',
        startDate: '',
        endDate: ''
    },
    TIME_OPTIONS: [
        { id: 1, value: 'Interval' },
        { id: 2, value: 'Dato' },
        { id: 3, value: 'Når som helst' },
        { id: 4, value: 'Periode' }
    ],
    INTERVALS: [
        { id: 1, value: 'Dagligt' },
        { id: 2, value: 'Ugentligt' },
        { id: 3, value: 'Månedligt' },
        { id: 4, value: 'Årligt' }
    ],
    WEEKDAYS: [
        { id: 1, value: 'Enhver dag' },
        { id: 2, value: 'Mandag' },
        { id: 3, value: 'Tirsdag' },
        { id: 4, value: 'Onsdag' },
        { id: 5, value: 'Torsdag' },
        { id: 6, value: 'Fredag' },
        { id: 7, value: 'Lørdag' },
        { id: 8, value: 'Søndag' }
    ],
    MONTH_DAYS: [
        { id: 1, value: 'Enhver dag' },
        { id: 2, value: '1.' },
        { id: 3, value: '2.' },
        { id: 4, value: '3.' },
        { id: 5, value: '4.' },
        { id: 6, value: '5.' },
        { id: 7, value: '6.' },
        { id: 8, value: '7.' },
        { id: 9, value: '8.' },
        { id: 10, value: '9.' },
        { id: 11, value: '10.' },
        { id: 12, value: '11.' },
        { id: 13, value: '12.' },
        { id: 14, value: '13.' },
        { id: 15, value: '14.' },
        { id: 16, value: '15.' },
        { id: 17, value: '16.' },
        { id: 18, value: '17.' },
        { id: 19, value: '18.' },
        { id: 20, value: '19.' },
        { id: 21, value: '20.' },
        { id: 22, value: '21.' },
        { id: 23, value: '22.' },
        { id: 24, value: '23.' },
        { id: 25, value: '24.' },
        { id: 26, value: '25.' },
        { id: 27, value: '26.' },
        { id: 28, value: '27.' },
        { id: 29, value: '28.' },
        { id: 30, value: '29.' },
        { id: 31, value: '30.' },
        { id: 32, value: '31.' },
        { id: 33, value: 'Månedens sidste dag' }
    ],
    MONTHS: [
        { id: 1, value: 'Enhver måned' },
        { id: 2, value: 'Januar' },
        { id: 3, value: 'Februar' },
        { id: 4, value: 'Marts' },
        { id: 5, value: 'April' },
        { id: 6, value: 'Maj' },
        { id: 7, value: 'Juni' },
        { id: 8, value: 'Juli' },
        { id: 9, value: 'August' },
        { id: 10, value: 'September' },
        { id: 11, value: 'Oktober' },
        { id: 12, value: 'November' },
        { id: 13, value: 'December' }
    ]
};

export const habit = {
    DEFAULT_VALUES: {
        type: 'Opret ny',
        habit: '',
        name: '',
        description: '',
        category: 'Vælg kategori',
        active: false,
        interval: 'Vælg tidspunkt',
        numberOfTimes: ''
    },
    DAY_PICKER: [
        { id: 1, value: 'Hver dag' },
        { id: 2, value: 'Hver mandag' },
        { id: 3, value: 'Hver tirsdag' },
        { id: 4, value: 'Hver onsdag' },
        { id: 5, value: 'Hver torsdag' },
        { id: 6, value: 'Hver fredag' },
        { id: 7, value: 'Hver lørdag' },
        { id: 8, value: 'Hver søndag' }
    ]
};
