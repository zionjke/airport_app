export type FlightType = {
    boarding_stop_time: number
    carrier: string
    flightnum: string
    sched: string
    scheduled_time: string
    source_dest_airport: string
    terminal: string
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
