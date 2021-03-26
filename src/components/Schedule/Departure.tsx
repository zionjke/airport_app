import React, {useEffect, useState} from 'react';
import {AirlineType, AirportType, API_KEY, ArrivalFlightType, CitiesType} from "../../types/types";
import axios from "axios";

type Props = {
    cities: Array<CitiesType>
    airlines: Array<AirlineType>
    airports: Array<AirportType>
};
export const Departure: React.FC<Props> = ({cities, airlines, airports}) => {
    const [switchLang, setSwitchLang] = useState<boolean>(false)
    const [flights, setFLights] = useState<Array<ArrivalFlightType>>([])
    useEffect(() => {
        axios.get(`http://aviation-edge.com/v2/public/timetable?key=${API_KEY}&iataCode=KBP&type=departure`).then(({data}) => setFLights(data))
    }, [])
    console.log(flights)
    return (
        <>

        </>
    );
};
