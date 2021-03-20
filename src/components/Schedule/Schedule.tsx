import React, {useEffect, useState} from 'react';
import styles from './Schedule.module.css'
import {FlightType} from "../../types/types";
import {FlightsItem} from "../Flights/FlightsItem";
import axios from "axios";
import arrivalIcon from '../../assets/arrival_yellow.svg'
import {TableTitle} from "./TableTitle/TableTitle";
import {TableHead} from "./TableHead/TableHead";

const API_KEY = '3fe0e8-91926e&iataCode'


type ScheduleProps = {};



export const Schedule: React.FC<ScheduleProps> = () => {
    const [switchLang, setSwitchLang] = useState<boolean>(false)
    const [flights, setFLights] = useState<Array<FlightType>>([])
    useEffect(() => {
        axios.get('https://airportserver.herokuapp.com/flights').then(({data}) => {
            setFLights(data)
        })
        const intervalId = setInterval(() => {
            setSwitchLang(!switchLang)
        }, 60000)

        return () => clearInterval(intervalId)

    }, [switchLang])

    const sortFlights = flights.sort(((a, b) => a.scheduled_time.localeCompare(b.scheduled_time)))


    return (
        <>
            <TableTitle icon={arrivalIcon} title={switchLang ? 'Arrival' : 'Приліт'}/>
            <table className={styles.shedule}>
                <TableHead switchLang={switchLang}/>
                {
                    sortFlights.map((flight, i) => (
                        <FlightsItem key={i}
                                     carrier={flight.carrier}
                                     flightNum={flight.flightnum}
                                     status={flight.sched}
                                     scheduledTime={flight.scheduled_time}
                                     source_dest_airport={flight.source_dest_airport}
                                     terminal={flight.terminal}/>
                    ))
                }
            </table>
        </>
    );
};
