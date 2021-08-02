import React, {useEffect, useState} from 'react';
import {AirlineType, AirportType, API_KEY, ArrivalFlightType, CitiesType} from "../../types/types";
import styles from './Schedule.module.css'
import axios from "axios";
import departureIcon from "../../assets/departure_yellow.svg";
import {TableTitle} from "./TableTitle/TableTitle";
import {TableHead} from "./TableHead/TableHead";
import moment from "moment";
import {FlightsItemDeparture} from '../Flights/FlightsItemDeparture';

type Props = {
    cities: Array<CitiesType>
    airlines: Array<AirlineType>
    airports: Array<AirportType>
};
export const Departure: React.FC<Props> = ({cities, airlines, airports}) => {
    const [switchLang, setSwitchLang] = useState<boolean>(false)
    const [flights, setFLights] = useState<Array<ArrivalFlightType>>([])
    const [count,setCount] = useState<number>(1)
    let now = moment().subtract('1', "minutes").format('YYYY-MM-DDTHH:mm:ss.SSS')
    let FLIGHT_PER_PAGE = 23;
    let filteredFlights = flights.filter(flight => flight.departure.scheduledTime >= now).slice(0,46)
    let startIndex = (count - 1) * FLIGHT_PER_PAGE
    let selectedFlights = filteredFlights.slice(startIndex, startIndex + FLIGHT_PER_PAGE)

    console.log(selectedFlights)


    useEffect(() => {
        axios.get(`http://aviation-edge.com/v2/public/timetable?key=${API_KEY}&iataCode=KBP&dep_terminal=D&type=departure`)
            .then(({data}) => setFLights(data))

        const intervalId = setInterval(() => {
            if(filteredFlights.length > 23) {
                if(startIndex === FLIGHT_PER_PAGE) {
                    setCount(1)
                } else {
                    setCount(count + 1)
                }
            }
            setSwitchLang(!switchLang)
        }, 60000)

        return () => clearInterval(intervalId)
    }, [switchLang])



    return (
        <>
            <TableTitle icon={departureIcon} title={switchLang ? 'DEPARTURE' : 'ВІДЛІТ'}/>
            <table className={styles.shedule}>
                <TableHead  switchLang={switchLang}/>
                {
                    selectedFlights.map((flight, i) => {
                        let airport = airports.find(a => a.codeIataAirport === flight.arrival.iataCode)
                        // @ts-ignore
                        let city = cities.find(c => c.codeIataCity === airport.codeIataCity)
                        let airline = airlines.find(a => a.codeIataAirline === flight.airline.iataCode)
                        return (
                            <FlightsItemDeparture key={i}
                                                  flightNum={flight.flight.iataNumber}
                                                  switchLang={switchLang}
                                                  status={flight.status}
                                                  estimatedTime={flight.departure.estimatedTime}
                                                  scheduledTime={flight.departure.scheduledTime}
                                                  terminal={flight.departure.terminal}
                                                  city={city}
                                                  airline={airline}/>
                        )
                    })
                }
            </table>
        </>
    );
};
