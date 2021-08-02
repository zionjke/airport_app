import React, {useEffect, useState} from 'react';
import styles from './Schedule.module.css'
import {AirlineType, AirportType, API_KEY, ArrivalFlightType, CitiesType,} from "../../types/types";
import {FlightsItemArrival} from "../Flights/FlightsItemArrival";
import axios from "axios";
import arrivalIcon from '../../assets/arrival_yellow.svg'
import {TableTitle} from "./TableTitle/TableTitle";
import {TableHead} from "./TableHead/TableHead";
import moment from "moment";


type ScheduleProps = {
    cities: Array<CitiesType>
    airlines: Array<AirlineType>
    airports: Array<AirportType>
};


export const Arrival: React.FC<ScheduleProps> = ({cities, airports, airlines}) => {
    const [switchLang, setSwitchLang] = useState<boolean>(false)
    const [flights, setFLights] = useState<Array<ArrivalFlightType>>([])
    const [count, setCount] = useState<number>(1)

    let now = moment().subtract('1', "minutes").format('YYYY-MM-DDTHH:mm:ss.SSS')

    let FLIGHT_PER_PAGE = 23;
    let filteredFlights = flights.filter(flight => flight.arrival.scheduledTime >= now).slice(0,46)
    let startIndex = (count - 1) * FLIGHT_PER_PAGE
    let selectedFlights = filteredFlights.slice(startIndex, startIndex + FLIGHT_PER_PAGE)

    useEffect(() => {
        axios.get(`http://aviation-edge.com/v2/public/timetable?key=${API_KEY}&iataCode=KBP&arr_terminal=D&type=arrival`)
            .then(({data}) => {
                setFLights(data)
            })
        const intervalId = setInterval(() => {
            if(startIndex === FLIGHT_PER_PAGE) {
                setCount(1)
            } else {
                setCount(count + 1)
            }
            setSwitchLang(!switchLang)
        }, 60000)

        return () => clearInterval(intervalId)

    }, [switchLang])



    return (
        <>
            <TableTitle icon={arrivalIcon} title={switchLang ? 'ARRIVAL' : 'ПРИЛІТ'}/>
            <table className={styles.shedule}>
                <TableHead switchLang={switchLang}/>
                {
                    selectedFlights.map((flight, i) => {
                            let airport = airports.find(a => a.codeIataAirport === flight.departure.iataCode)
                            // @ts-ignore
                            let city = cities.find(c => c.codeIataCity === airport.codeIataCity)
                            let airline = airlines.find(a => a.codeIataAirline === flight.airline.iataCode)
                            return (
                                <FlightsItemArrival key={i}
                                                    city={city}
                                                    airline={airline}
                                                    switchLang={switchLang}
                                                    flightNum={flight.flight.iataNumber}
                                                    status={flight.status}
                                                    scheduledTime={flight.arrival.scheduledTime}
                                                    terminal={flight.arrival.terminal}
                                                    estimatedTime={flight.arrival.estimatedTime}/>
                            )

                        }
                    )
                }
            </table>
        </>
    );
};
