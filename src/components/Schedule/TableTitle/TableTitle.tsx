import * as React from 'react';
import styles from './TableTitle.module.css'


type Props = {
    title: string
    icon:string
};
export const TableTitle: React.FC<Props> = ({title,icon}) => {
    return (
        <div className={styles.tableTitle}>
            <h1 className={styles.title}>{title}</h1>
            <img className={styles.icon} src={icon} alt=""/>
        </div>
    );
};
