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

    let cityName: string | undefined;
    switch (props.city?.nameCity) {
        case 'Chernovtsy':
            cityName = 'Chernivtsi'
            break;
        case 'Dnepropetrovsk':
            cityName = 'Dnipro'
            break;
        case 'Kharkov':
            cityName = 'Kharkiv'
            break;
        case 'Kiev':
            cityName = 'Kiyv'
            break;
        case 'Ivano-Frankovsk':
            cityName = 'Ivano-Frankivsk'
            break;
        case 'Kamenets-podolskiy':
            cityName = 'Kamianets-Podilskyi'
            break;
        case 'Kirovograd':
            cityName = 'Kropyvnytskyi'
            break;
        case 'Krivoy Rog':
            cityName = 'Kryvyi Rih'
            break;
        case 'Zaporozhye':
            cityName = 'Zaporizhzhia'
            break;
        case 'Rovno':
            cityName = 'Rivne'
            break;
        case 'Ternopol':
            cityName = 'Ternopil'
            break;
        default:
            cityName = props.city?.nameCity
    }


    return (
        <tr>
            <td>{props.flightNum}</td>
            <td>{moment(props.scheduledTime).format('HH:mm')}</td>
            <td style={{color: '#FFDB00'}}>{cityName}</td>
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
