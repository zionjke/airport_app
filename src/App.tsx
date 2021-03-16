import React, {useEffect, useState} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Schedule} from "./components/Schedule/Schedule";


function App() {


    // useEffect(() => {
    //     setInterval(() => {
    //         setSwitchLang(!switchLang)
    //     },40000)
    // },[switchLang])

    return (
        <div className="App">
            <Header/>
            <Schedule />
        </div>
    );
}

export default App;
