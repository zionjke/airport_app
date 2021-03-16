import React from 'react';
import kloIcon from '../../assets/kloIcon.png'
import airPlaneIcon from '../../assets/airplane.png'
import style from './Header.module.css'
import {Weather} from "../Weather/Weather";

type HeaderProps = {};

export const Header: React.FC<HeaderProps> = () => {
    return (
        <div className={style.header}>
            <div className={style.icons}>
                <img className={style.airplaneIcon} src={airPlaneIcon} alt=""/>
                <img className={style.headerIcon} src={kloIcon} alt="Klo Icon"/>
            </div>
            <Weather/>
        </div>
    );
};
