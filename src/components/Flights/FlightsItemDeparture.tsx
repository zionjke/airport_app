import React from 'react';
import styles from './FlightsItem.module.css'
import moment from "moment";
import {AirlineType, CitiesType} from "../../types/types";

type Props = {
    flightNum: string
    switchLang: boolean
    status: string
    gate: string
    estimatedTime: string
    scheduledTime: string
    terminal: string
    city: CitiesType | undefined
    airline: AirlineType | undefined
};
export const FlightsItemDeparture: React.FC<Props> = (props) => {
    let classForItem = '';

    if (props.status === 'прибув') {
        classForItem = styles.arrived
    } else if (props.status === 'затримка') {
        classForItem = styles.determinate
    } else {
        classForItem = ''
    }



    return (
        <tr>
            <td>{props.flightNum}</td>
            <td>{moment(props.scheduledTime).format('HH:mm')}</td>
            <td style={{color: '#FFDB00'}}>{props.city?.nameCity}</td>
            <td>{props.airline?.nameAirline}</td>
            <td>
                <span className={props.terminal === 'F' ? styles.terminal_f : styles.terminal}>{props.terminal}</span>
            </td>
            {
                props.gate === null ? <td>?</td> : <td>{props.gate}</td>
            }
            <td className={classForItem}>
                {
                    props.switchLang
                        ?
                        (props.scheduledTime
                            ? `Sheduled`
                            : `Expected at ${moment(props.estimatedTime).format('HH:mm')}`)
                        :
                        ((props.scheduledTime
                            ? 'За розкладом'
                            : `Очiкується о ${moment(props.estimatedTime).format('HH:mm')}`))
                }
            </td>
        </tr>
    );
};
