import React from 'react';
import kloIcon from '../../assets/kloIcon.png'
import airPlaneIcon from '../../assets/airplane.png'
import style from './Header.module.css'

type HeaderProps = {};

export const Header: React.FC<HeaderProps> = () => {
    return (
        <div className={style.header}>
            <img className={style.headerIcon} src={kloIcon} alt="Klo Icon"/>
            <img className={style.airplaneIcon} src={airPlaneIcon} alt=""/>
            <p className={style.headerTitle}>Приліт</p>
        </div>
    );
};
