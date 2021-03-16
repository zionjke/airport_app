import React, {useEffect, useState} from 'react';
import styles from './Weather.module.css'
import {WeatherType} from "../../types/types";
import axios from "axios";
import borisIcon from '../../assets/boris.png'

const APP_KEY = '18ca32c19c644d60dbf768c4dbde0f90'

type Props = {};

export const Weather: React.FC<Props> = (props) => {
    const [city, setCity] = useState<string>('')
    const [temperature, setTemperature] = useState<number>()
    const [description, setDiscription] = useState<string>('')
    const [iconCode, setIconCode] = useState<string>('')

    let iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`

    useEffect(() => {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Boryspil%E2%80%99,UA&APPID=${APP_KEY}`).then(({data}) => {
            setCity(data.name)
            setTemperature(Math.round(data.main.temp - 273.15))
            setIconCode(data.weather[0].icon)
            setDiscription(data.weather[0].description)
        })
    }, [iconCode,temperature])

    return (
        <div className={styles.widget}>
            <div className={styles.icon}>
                <img src={iconUrl} alt="Weather Icon"/>
            </div>
            <div className={styles.temp}>
                {temperature}<span>&#8451;</span>
            </div>
            <div className={styles.city}>
                {city}
            </div>
        </div>
    );
};
