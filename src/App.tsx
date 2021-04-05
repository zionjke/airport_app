import React, {useEffect, useState} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Arrival} from "./components/Schedule/Arrival";
import {AirlineType, AirportType, API_KEY, CitiesType} from "./types/types";
import axios from "axios";
import {Route} from 'react-router-dom';
import {Departure} from "./components/Schedule/Departure";


function App() {
    const [cities, setCities] = useState<Array<CitiesType>>([])
    const [airlines, setAirlines] = useState<Array<AirlineType>>([])
    const [airports, setAirports] = useState<Array<AirportType>>([])


    useEffect(() => {
        axios.get(`https://aviation-edge.com/v2/public/cityDatabase?key=${API_KEY}&lang=uk`)
            .then(({data}) => setCities(data))
        axios.get(`https://aviation-edge.com/v2/public/airlineDatabase?key=${API_KEY}`).then(({data}) => setAirlines(data))
        axios.get(`https://aviation-edge.com/v2/public/airportDatabase?key=${API_KEY}`).then(({data}) => setAirports(data))
    }, [])

    return (
        <div className="App">
            <Header/>
            <Route path='/arrival' render={() => <Arrival cities={cities}
                                                   airlines={airlines}
                                                   airports={airports}/>}/>
            <Route path='/departure' render={() => <Departure cities={cities}
                                                              airlines={airlines}
                                                              airports={airports}/>}/>
        </div>
    );
}

export default App;
