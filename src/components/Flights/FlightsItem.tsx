import React from 'react';
import styles from './FlightsItem.module.css'

type Props = {
    carrier: string
    flightNum: string
    status: string
    scheduledTime: string
    source_dest_airport: string
    terminal: string
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
            <td>{props.scheduledTime}</td>
            <td style={{color: '#FFDB00'}}>{props.source_dest_airport}</td>
            <td>{props.carrier}</td>
            <td><span className={styles.terminal}>{props.terminal}</span></td>
            <td className={classForItem}>{props.status}</td>
        </tr>
    );
};
