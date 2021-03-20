import React, {useEffect, useState} from 'react';
import styles from './Weather.module.css'
import {WeatherType} from "../../types/types";
import axios from "axios";
import moment from "moment";
import 'moment/locale/uk'
import 'moment/locale/en-gb'
import 'moment-timezone';





const APP_KEY = '18ca32c19c644d60dbf768c4dbde0f90'

type Props = {};

export const Weather: React.FC<Props> = (props) => {
    const [switchLang, setSwitchLang] = useState<boolean>(false)
    const [city, setCity] = useState<string>('')
    const [temperature, setTemperature] = useState<number>()
    const [description, setDiscription] = useState<string>('')
    const [iconCode, setIconCode] = useState<string>('')

    let iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`

    const getWeatherData = async (): Promise<void> => {
        try {
            const {data} = await axios.get<WeatherType>(`http://api.openweathermap.org/data/2.5/weather?q=Boryspil%E2%80%99,UA&APPID=${APP_KEY}`)
            setCity(data.name)
            setTemperature(Math.round(data.main.temp - 273.15))
            setIconCode(data.weather[0].icon)
            setDiscription(data.weather[0].description)
        } catch (err) {
            console.error(err)
        }
    }


    useEffect(() => {
        getWeatherData()
        let interval = setInterval(() => {
            setSwitchLang(!switchLang)
        }, 60000)

        return () => clearInterval(interval)
    }, [switchLang])


    return (
        <div className={styles.widget}>
                <div className={styles.temp}>
                    {temperature}<span>&#8451;</span>
                    <img className={styles.icon} src={iconUrl} alt="Weather Icon"/>
                </div>
            <div className={styles.date}>
                {
                  switchLang
                      ?  moment().locale("en-GB").format('MMMM Do YYYY, h:mm a')
                      : moment().locale("uk").format('MMMM Do YYYY, HH:mm ')
                }
            </div>
        </div>
    );
};
