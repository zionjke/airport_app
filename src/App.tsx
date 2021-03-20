import React, {useEffect, useState} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Schedule} from "./components/Schedule/Schedule";
import axios from "axios";


function App() {

    const [state,setState] = useState([])
    const API_KEY = '3fe0e8-91926e&iataCode'

    useEffect(() => {
        axios.get(`https://aviation-edge.com/v2/public/timetable?key=${API_KEY}=KBP&type=arrival&arr_terminal=D&status=active`)
            .then(({data}) => setState(data) )
    },[])

    console.log(state)

    return (
        <div className="App">
            <Header/>
            <Schedule />
        </div>
    );
}

export default App;
