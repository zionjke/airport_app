import React, {useEffect, useState} from 'react';
import styles from './Schedule.module.css'
import {AirlineType, AirportType, ArrivalFlightType, CitiesType, FlightType} from "../../types/types";
import {FlightsItem} from "../Flights/FlightsItem";
import axios from "axios";
import arrivalIcon from '../../assets/arrival_yellow.svg'
import {TableTitle} from "./TableTitle/TableTitle";
import {TableHead} from "./TableHead/TableHead";
import moment from "moment";

const API_KEY = '3fe0e8-91926e'


type ScheduleProps = {};


export const Schedule: React.FC<ScheduleProps> = () => {
    const [switchLang, setSwitchLang] = useState<boolean>(false)
    const [flights, setFLights] = useState<Array<ArrivalFlightType>>([])
    const [cities, setCities] = useState<Array<CitiesType>>([])
    const [airlines, setAirlines] = useState<Array<AirlineType>>([])
    const [airports, setAirports] = useState<Array<AirportType>>([])

    useEffect(() => {
        let now = moment().subtract(20,'minutes').format('YYYY-MM-DDTHH:mm:ss')
        axios.get(` http://aviation-edge.com/v2/public/timetable?key=${API_KEY}&iataCode=KBP&type=arrival&arr_terminal=D`)
            .then(({data}) => {
                setFLights(data.filter((item: { arrival: { scheduledTime: string; }; }) => (item.arrival.scheduledTime >= now)).slice(0, 25))
            })
        axios.get(`https://aviation-edge.com/v2/public/cityDatabase?key=${API_KEY}&lang=uk`)
            .then(({data}) => setCities(data))
        axios.get(`https://aviation-edge.com/v2/public/airlineDatabase?key=${API_KEY}`).then(({data}) => setAirlines(data))
        axios.get(`https://aviation-edge.com/v2/public/airportDatabase?key=${API_KEY}`).then(({data}) => setAirports(data))
        const intervalId = setInterval(() => {
            setSwitchLang(!switchLang)
        }, 60000)

        return () => clearInterval(intervalId)

    }, [switchLang])



    return (
        <>
            <TableTitle icon={arrivalIcon} title={switchLang ? 'Arrival' : 'Приліт'}/>
            <table className={styles.shedule}>
                <TableHead switchLang={switchLang}/>
                {
                    flights.map((flight, i) => {
                            let airport = airports.find(a => a.codeIataAirport === flight.departure.iataCode)
                            // @ts-ignore
                        let city2 = cities.find(c => c.codeIataCity === airport.codeIataCity)
                            let city = cities.find(c => c.codeIataCity === flight.departure.iataCode)
                            let airline = airlines.find(a => a.codeIataAirline === flight.airline.iataCode)
                            return (
                                <FlightsItem key={i}
                                             city={city2}
                                             airline={airline}
                                             switchLang={switchLang}
                                             carrier={flight.airline.name}
                                             flightNum={flight.flight.iataNumber}
                                             status={flight.status}
                                             scheduledTime={flight.arrival.scheduledTime}
                                             destination={flight.departure.iataCode}
                                             terminal={flight.arrival.terminal}/>
                            )

                        }
                    )
                }
            </table>
        </>
    );
};
