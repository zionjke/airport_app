import React from 'react';
import styles from './FlightsItem.module.css'

type Props = {
    carrier: string
    flightnum: string
    sched: string
    scheduled_time: string
    source_dest_airport: string
    terminal: string
};
export const FlightsItem: React.FC<Props> = (props) => {

    let classForItem = '';

    if (props.sched === 'прибув') {
        classForItem = styles.arrived
    } else if (props.sched === 'затримка') {
        classForItem = styles.determinate
    } else {
        classForItem = ''
    }

    return (
        <tr>
            <td>{props.flightnum}</td>
            <td>{props.scheduled_time}</td>
            <td style={{color: '#FFDB00'}}>{props.source_dest_airport}</td>
            <td>{props.carrier}</td>
            <td>{props.terminal}</td>
            <td className={classForItem}>{props.sched}</td>
        </tr>
    );
};
