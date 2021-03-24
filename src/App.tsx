import React, {useEffect, useState} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Schedule} from "./components/Schedule/Schedule";



function App() {

    // const [state, setState] = useState([])
    // const [cities, setCities] = useState([])
    // const API_KEY = '3fe0e8-91926e'
    // // let now = moment().format()
    // // console.log(now)
    //
    //
    // useEffect(() => {
    //     let now = moment().format()
    //     axios.get(` http://aviation-edge.com/v2/public/timetable?key=${API_KEY}&iataCode=KBP&type=arrival`)
    //         .then(({data}) => {
    //             const filteredState = data.filter((item: { arrival: { scheduledTime: string; }; }) => (item.arrival.scheduledTime >= now))
    //             setState(filteredState)
    //             console.log(filteredState)
    //         })
    //     axios.get(`https://aviation-edge.com/v2/public/cityDatabase?key=${API_KEY}`)
    //         .then(({data}) => {
    //             setCities(data)
    //             console.log(data.filter((item: { codeIso2Country: string; }) => item.codeIso2Country === 'UA'))
    //         })
    // }, [])
    // const iataCode = 'DOH'
    // const cityName = cities.find(({codeIataCity}) => codeIataCity === iataCode)
    // console.log(cityName)
    //
    // // console.log(state)
    // // // @ts-ignore
    // // const filteredState = state.filter(item => (item.arrival.scheduledTime >= now))
    // // console.log(filteredState)


    return (
        <div className="App">
            <Header/>
            <Schedule/>
        </div>
    );
}

export default App;
