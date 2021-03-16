import React, {useEffect, useState} from 'react';
import styles from './Schedule.module.css'
import {FlightType} from "../../types/types";
import {FlightsItem} from "../Flights/FlightsItem";
import axios from "axios";


type ScheduleProps = {};

export const Schedule: React.FC<ScheduleProps> = () => {
    const [switchLang, setSwitchLang] = useState<boolean>(false)
    const [flights, setFLights] = useState<Array<FlightType>>([])
    useEffect(() => {
        axios.get('http://localhost:3005/flights').then(({data}) => {
            setFLights(data.slice(0,13))
        })
        const intervalId = setInterval(() => {
            setSwitchLang(!switchLang)
        }, 60000)

        return () => clearInterval(intervalId)

    }, [switchLang])

    return (
        <>
            <h1 className={styles.headerTitle}>{switchLang ? 'Departure' : 'Приліт'}</h1>
            <table className={styles.shedule}>
                <tr>
                    <th>{switchLang ? 'Flight' : 'Рейс'}</th>
                    <th>{switchLang ? 'Time' : 'Час'}</th>
                    <th>{switchLang ? 'Destination' : 'Призначення'}</th>
                    <th>{switchLang ? 'Carrier' : 'Перевізник'}</th>
                    <th>{switchLang ? 'Terminal' : 'Термінал'}</th>
                    <th>{switchLang ? 'Status' : 'Статус'}</th>
                </tr>
                {
                    flights.map(flight => (
                        <FlightsItem key={flight.scheduled_time}
                                     carrier={flight.carrier}
                                     flightnum={flight.flightnum}
                                     sched={flight.sched}
                                     scheduled_time={flight.scheduled_time}
                                     source_dest_airport={flight.source_dest_airport}
                                     terminal={flight.terminal}/>
                    ))
                }
            </table>
        </>
    );
};
