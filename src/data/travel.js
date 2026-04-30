const travels = [
    {
        id: 1,
        title: "Weekend a Barcellona",
        destination: "Barcellona, Spagna",
        startDate: "2026-06-12",
        endDate: "2026-06-15",
        price: 250,
        organizer: { id: 101, name: "Luca Rossi", email: "luca.rossi@example.com", telefono: 1234567890, codice_fiscale: "smd287459csis22", numero_emergenza: 987654321 },
        participants: [
            { id: 201, name: "Anna Bianchi", email: "anna.bianchi@example.com", telefono: 1234567890, codice_fiscale: "smd287459csis22", numero_emergenza: 987654321 },
            { id: 202, name: "Marco Verdi", email: "marco.verdi@example.com", telefono: 1234567890, codice_fiscale: "smd287459csis22", numero_emergenza: 987654321 }
        ],
        description: "City break con visite guidate e tapas tour.",
        capacity: 12
    },
    {
        id: 2,
        title: "Trekking nelle Dolomiti",
        destination: "Val di Fassa, Italia",
        startDate: "2026-07-01",
        endDate: "2026-07-07",
        price: 480,
        organizer: { id: 102, name: "Sara Neri", email: "sara.neri@example.com", telefono: 1234567890, codice_fiscale: "smd287459csis22", numero_emergenza: 987654321 },
        participants: [
            { id: 203, name: "Giovanni Rossi", email: "giovanni.rossi@example.com", telefono: 1234567890, codice_fiscale: "smd287459csis22", numero_emergenza: 987654321 },
            { id: 204, name: "Elena Ferri", email: "elena.ferri@example.com", telefono: 1234567890, codice_fiscale: "smd287459csis22", numero_emergenza: 987654321 },
            { id: 205, name: "Paolo Gatti", email: "paolo.gatti@example.com", telefono: 1234567890, codice_fiscale: "smd287459csis22", numero_emergenza: 987654321 }
        ],
        description: "Settimana di trekking per livelli intermedi.",
        capacity: 16
    },
    {
        id: 3,
        title: "Isola di Santorini",
        destination: "Santorini, Grecia",
        startDate: "2026-08-10",
        endDate: "2026-08-16",
        price: 720,
        organizer: { id: 103, name: "Marta Colombo", email: "marta.colombo@example.com", telefono: 1234567890, codice_fiscale: "smd287459csis22", numero_emergenza: 987654321 },
        participants: [
            { id: 206, name: "Riccardo Bianchi", email: "riccardo.bianchi@example.com", telefono: 1234567890, codice_fiscale: "smd287459csis22", numero_emergenza: 987654321 }
        ],
        description: "Relax e tramonti, escursione in barca inclusa.",
        capacity: 10
    },
    {
        id: 4,
        title: "Avventura in Islanda",
        destination: "Reykjavík & Golden Circle, Islanda",
        startDate: "2026-09-05",
        endDate: "2026-09-12",
        price: 1350,
        organizer: { id: 104, name: "Diego Fontana", email: "diego.fontana@example.com", telefono: 1234567890, codice_fiscale: "smd287459csis22", numero_emergenza: 987654321 },
        participants: [
            { id: 207, name: "Lucia Romano", email: "lucia.romano@example.com", telefono: 1234567890, codice_fiscale: "smd287459csis22", numero_emergenza: 987654321 },
            { id: 208, name: "Federico Moretti", email: "federico.moretti@example.com", telefono: 1234567890, codice_fiscale: "smd287459csis22", numero_emergenza: 987654321 },
            { id: 209, name: "Chiara Villa", email: "chiara.villa@example.com", telefono: 1234567890, codice_fiscale: "smd287459csis22", numero_emergenza: 987654321 }
        ],
        description: "Geyser, cascate, e possibilità di avvistare aurore boreali.",
        capacity: 14
    },
    {
        id: 5,
        title: "Cultura a Kyoto",
        destination: "Kyoto, Giappone",
        startDate: "2026-10-01",
        endDate: "2026-10-10",
        price: 2200,
        organizer: { id: 105, name: "Alessandra Pini", email: "alessandra.pini@example.com", telefono: 1234567890, codice_fiscale: "smd287459csis22", numero_emergenza: 987654321 },
        participants: [
            { id: 210, name: "Stefano Longo", email: "stefano.longo@example.com", telefono: 1234567890, codice_fiscale: "smd287459csis22", numero_emergenza: 987654321 },
            { id: 211, name: "Francesca Sala", email: "francesca.sala@example.com", telefono: 1234567890, codice_fiscale: "smd287459csis22", numero_emergenza: 987654321 }
        ],
        description: "Visite ai templi, cerimonia del tè e cucina locale.",
        capacity: 8
    },
    {
        id: 6,
        title: "Roadtrip in Portogallo",
        destination: "Lisbona e costa dell'Algarve, Portogallo",
        startDate: "2026-05-20",
        endDate: "2026-05-30",
        price: 890,
        organizer: { id: 106, name: "Gabriele Bertoni", email: "gabriele.bertoni@example.com", telefono: 1234567890, codice_fiscale: "smd287459csis22", numero_emergenza: 987654321 },
        participants: [
            { id: 212, name: "Monica Serra", email: "monica.serra@example.com", telefono: 1234567890, codice_fiscale: "smd287459csis22", numero_emergenza: 987654321 },
            { id: 213, name: "Lorenzo Greco", email: "lorenzo.greco@example.com", telefono: 1234567890, codice_fiscale: "smd287459csis22", numero_emergenza: 987654321 },
            { id: 214, name: "Valentina Riva", email: "valentina.riva@example.com", telefono: 1234567890, codice_fiscale: "smd287459csis22", numero_emergenza: 987654321 },
            { id: 215, name: "Davide Piras", email: "davide.piras@example.com", telefono: 1234567890, codice_fiscale: "smd287459csis22", numero_emergenza: 987654321 }
        ],
        description: "On the road lungo coste, surf e degustazioni di vino.",
        capacity: 20
    },
    {
        id: 7,
        title: "Escursione nel Sahara",
        destination: "Merzouga, Marocco",
        startDate: "2026-11-02",
        endDate: "2026-11-07",
        price: 640,
        organizer: { id: 107, name: "Ilaria Conti", email: "ilaria.conti@example.com", telefono: 1234567890, codice_fiscale: "smd287459csis22", numero_emergenza: 987654321 },
        participants: [
            { id: 216, name: "Nicola De Luca", email: "nicola.deluca@example.com", telefono: 1234567890, codice_fiscale: "smd287459csis22", numero_emergenza: 987654321 }
        ],
        description: "Giro in cammello, notte nelle dune e cultura berbera.",
        capacity: 12
    },
    {
        id: 8,
        title: "Relax in Thailandia",
        destination: "Phuket, Thailandia",
        startDate: "2026-12-15",
        endDate: "2026-12-26",
        price: 1150,
        organizer: { id: 108, name: "Matteo Giannini", email: "matteo.giannini@example.com", telefono: 1234567890, codice_fiscale: "smd287459csis22", numero_emergenza: 987654321 },
        participants: [
            { id: 217, name: "Sara Morelli", email: "sara.morelli@example.com", telefono: 1234567890, codice_fiscale: "smd287459csis22", numero_emergenza: 987654321 },
            { id: 218, name: "Claudio Fiore", email: "claudio.fiore@example.com", telefono: 1234567890, codice_fiscale: "smd287459csis22", numero_emergenza: 987654321 }
        ],
        description: "Spiagge, immersioni e massaggi tradizionali.",
        capacity: 18
    },
    {
        id: 9,
        title: "Citybreak a New York",
        destination: "New York, USA",
        startDate: "2026-04-20",
        endDate: "2026-04-26",
        price: 980,
        organizer: { id: 109, name: "Beatrice Rinaldi", email: "beatrice.rinaldi@example.com", telefono: 1234567890, codice_fiscale: "smd287459csis22", numero_emergenza: 987654321 },
        participants: [
            { id: 219, name: "Edoardo Fabbri", email: "edoardo.fabbri@example.com", telefono: 1234567890, codice_fiscale: "smd287459csis22", numero_emergenza: 987654321 },
            { id: 220, name: "Martina Leone", email: "martina.leone@example.com", telefono: 1234567890, codice_fiscale: "smd287459csis22", numero_emergenza: 987654321 },
            { id: 221, name: "Pietro Russo", email: "pietro.russo@example.com", telefono: 1234567890, codice_fiscale: "smd287459csis22", numero_emergenza: 987654321 }
        ],
        description: "Musei, musical a Broadway e food tour.",
        capacity: 25
    },
    {
        id: 10,
        title: "Norvegia: fiordi e luci",
        destination: "Bergen & fiordi, Norvegia",
        startDate: "2027-01-10",
        endDate: "2027-01-17",
        price: 1420,
        organizer: { id: 110, name: "Federica Marchetti", email: "federica.marchetti@example.com", telefono: 1234567890, codice_fiscale: "smd287459csis22", numero_emergenza: 987654321 },
        participants: [
            { id: 222, name: "Alberto Costa", email: "alberto.costa@example.com", telefono: 1234567890, codice_fiscale: "smd287459csis22", numero_emergenza: 987654321 }
        ],
        description: "Crociera tra i fiordi e possibilità di avvistare aurore boreali.",
        capacity: 10
    }
];

export default travels;