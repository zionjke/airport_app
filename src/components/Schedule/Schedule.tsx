import React from 'react';
import styles from './Schedule.module.css'
import {FlightType} from "../../types/types";
import {FlightsItem} from "../Flights/FlightsItem";

type ScheduleProps = {
    flights: Array<FlightType>
};

export const Schedule: React.FC<ScheduleProps> = ({flights}) => {
    return (
        <table className={styles.shedule}>
            <tr>
                <th>Рейс</th>
                <th>Час</th>
                <th>Призначення</th>
                <th>Перевізник</th>
                <th>Термінал</th>
                <th>Статус</th>
            </tr>
            {
                flights.map(flight => (
                    <FlightsItem carrier={flight.carrier}
                                 flightnum={flight.flightnum}
                                 sched={flight.sched}
                                 scheduled_time={flight.scheduled_time}
                                 source_dest_airport={flight.source_dest_airport}
                                 terminal={flight.terminal}/>
                ))
            }
        </table>
    );
};
