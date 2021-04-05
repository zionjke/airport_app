import React, {useEffect, useState} from 'react';
import {AirlineType, AirportType, API_KEY, ArrivalFlightType, CitiesType} from "../../types/types";
import styles from './Schedule.module.css'
import axios from "axios";
import departureIcon from "../../assets/departure_yellow.svg";
import {TableTitle} from "./TableTitle/TableTitle";
import {TableHead} from "./TableHead/TableHead";
import {log} from "util";
import moment from "moment";
import {FlightsItem} from "../Flights/FlightsItem";

type Props = {
    cities: Array<CitiesType>
    airlines: Array<AirlineType>
    airports: Array<AirportType>
};
export const Departure: React.FC<Props> = ({cities, airlines, airports}) => {
    const [switchLang, setSwitchLang] = useState<boolean>(false)
    const [flights, setFLights] = useState<Array<ArrivalFlightType>>([])
    useEffect(() => {
        let now = moment().format('YYYY-MM-DDTHH:mm:ss')
        console.log(now)
        axios.get(`http://aviation-edge.com/v2/public/timetable?key=${API_KEY}&iataCode=KBP&type=departure`)
            .then(({data}) => setFLights(data.filter((item: { departure: { scheduledTime: string; }; }) => item.departure.scheduledTime >= now)))

        const intervalId = setInterval(() => {
            setSwitchLang(!switchLang)
        }, 60000)

        return () => clearInterval(intervalId)
    }, [])

    return (
        <>
            <TableTitle icon={departureIcon} title={switchLang ? 'Departure' : 'Відліт'}/>
            <table className={styles.shedule}>
                <TableHead switchLang={switchLang}/>
                {
                    flights.map((flight, i) => {
                        let airport = airports.find(a => a.codeIataAirport === flight.arrival.iataCode)
                        // @ts-ignore
                        let city = cities.find(c => c.codeIataCity === airport.codeIataCity)
                        let airline = airlines.find(a => a.codeIataAirline === flight.airline.iataCode)
                        return (
                            <FlightsItem key={i}
                                         flightNum={flight.flight.iataNumber}
                                         switchLang={switchLang}
                                         status={flight.status}
                                         estimatedTime={flight.departure.estimatedTime}
                                         scheduledTime={flight.departure.scheduledTime}
                                         terminal={flight.departure.terminal}
                                // gate={flight.departure.gate}
                                         city={city}
                                         airline={airline}/>
                        )
                    })
                }
            </table>
        </>
    );
};
