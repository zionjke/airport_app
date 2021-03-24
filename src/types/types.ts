// export type FlightType = {
//     boarding_stop_time: number
//     carrier: string
//     flightnum: string
//     sched: string
//     scheduled_time: string
//     source_dest_airport: string
//     terminal: string
// }

export type ArrivalFlightType = {
    airline: ArrivaAirlineType
    arrival: ArrivalType
    departure: DepartureType
    flight: FlightType
    status: string
}

export type ArrivaAirlineType = {
    name: string
    iataCode: string
    estimatedTime:string | null
}

export type ArrivalType = {
    scheduledTime: string
    terminal: string
    estimatedTime:string
}

export type DepartureType = {
    iataCode: string
}

export type FlightType = {
    iataNumber: string
}

export type CitiesType = {
    codeIataCity: string
    nameCity: string
    translations: {
        city:{
            ukrainian:string
        }
    }
}

export type AirlineType = {
    codeIataAirline: string
    nameAirline: string
    nameCountry: string
}

export type AirportType = {
    airportId: number
    codeIataAirport: string
    codeIataCity: string
    nameAirport: string
}

export type WeatherType = {
    "weather": [
        {
            "id": number,
            "main": string,
            "description": string,
            "icon": string
        }
    ],
    "main": {
        "temp": number
        "feels_like": number
        "temp_min": number
        "temp_max": number
        "pressure": number
        "humidity": number
    },
    "name": string,
}


// boarding_stop_time: 0
// carrier: "Ukraine International Airlines"
// flightnum: "PS 9559"
// sched: "приліт о 19:16"
// scheduled_time: "19:15"
// source_dest_airport: "Стамбул"
// terminal: "D"


// boarding_stop_time: 0
// carrier: "Wind Rose "
// flightnum: "7W 104"
// sched: "прибув"
// scheduled_time: "19:10"
// source_dest_airport: "Дніпро"
// terminal: "D"
