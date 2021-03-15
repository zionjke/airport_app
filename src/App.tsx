import React, {useEffect, useState} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Schedule} from "./components/Schedule/Schedule";
import {FlightType} from "./types/types";
import axios from "axios";

function App() {
    const [flights, setFLights] = useState<Array<FlightType>>([])
    useEffect(() => {
        axios.get('http://localhost:3005/flights').then(({data}) => {
            setFLights(data)
        })
    },[])
    return (
        <div className="App">
            <Header/>
            <Schedule flights={flights}/>
        </div>
    );
}

export default App;
