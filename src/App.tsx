import React, {useEffect, useState} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Schedule} from "./components/Schedule/Schedule";
import axios from "axios";
import moment from "moment";


function App() {

    const [state, setState] = useState([])
    const API_KEY = '3fe0e8-91926e&iataCode'
    let now = moment().format()


    useEffect(() => {
        axios.get(`https://aviation-edge.com/v2/public/timetable?key=${API_KEY}=KBP&type=arrival&lang=ru`)
            .then(({data}) => setState(data))
    }, [])

    console.log(state)
    // @ts-ignore
    const filteredState = state.filter(item => item.arrival.scheduledTime >= now)
    console.log(filteredState)
    console.log(now)

    return (
        <div className="App">
            <Header/>
            <Schedule/>
        </div>
    );
}

export default App;
