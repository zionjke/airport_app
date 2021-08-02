import React from 'react';
import styles from './FlightsItem.module.css'
import moment from "moment";
import {AirlineType, CitiesType} from "../../types/types";

type Props = {
    flightNum: string
    switchLang: boolean
    status: string
    estimatedTime: string
    scheduledTime: string
    terminal: string
    city: CitiesType | undefined
    airline: AirlineType | undefined
};
export const FlightsItemDeparture: React.FC<Props> = (props) => {

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
            <td>
                {
                    props.switchLang
                        ?
                        (props.estimatedTime !== props.scheduledTime && props.estimatedTime !== null
                            ? `Expected at ${moment(props.estimatedTime).format('HH:mm')}`
                            : 'Sheduled')
                        :
                        ((props.estimatedTime !== props.scheduledTime && props.estimatedTime !== null
                            ? `Очiкується о ${moment(props.estimatedTime).format('HH:mm')}`
                            : 'За розкладом'))
                }
            </td>
        </tr>
    );
};
