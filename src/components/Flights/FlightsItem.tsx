import React from 'react';
import styles from './FlightsItem.module.css'
import moment from "moment";
import {AirlineType, CitiesType} from "../../types/types";

type Props = {
    carrier: string
    flightNum: string
    switchLang: boolean
    status: string
    estimatedTime: string
    scheduledTime: string
    destination: string
    terminal: string
    city: CitiesType | undefined
    airline: AirlineType | undefined
};
export const FlightsItem: React.FC<Props> = (props) => {
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
            <td style={{color: '#FFDB00'}}>
                {
                    props.switchLang
                        ? props.city?.nameCity
                        : props.city?.translations.city.ukrainian}
            </td>
            <td>{props.airline?.nameAirline}</td>
            <td><span className={styles.terminal}>{props.terminal}</span></td>
            <td className={classForItem}>
                { props.switchLang ?
                    (props.estimatedTime !== null
                        ? `Expected at ${moment(props.estimatedTime).format('HH:mm')}`
                        : props.status ) :
                        ((props.estimatedTime !== null
                        ? `Очiкується о ${moment(props.estimatedTime).format('HH:mm')}`
                        : 'За розкладом' ))
                }
            </td>
        </tr>
    );
};
