import React from 'react';
import kloIcon2 from '../../assets/kloIcon2.png'
import airPlaneIcon from '../../assets/source.gif'
import style from './Header.module.css'
import {Weather} from "../Weather/Weather";


type HeaderProps = {};

export const Header: React.FC<HeaderProps> = () => {
    return (
        <div className={style.header}>
            <div className={style.icons}>
                {/*<img className={style.airplaneIcon} src={airPlaneIcon} alt=""/>*/}
                <img className={''} src={kloIcon2} alt="Klo Icon"/>
            </div>
            <Weather/>
        </div>
    );
};
