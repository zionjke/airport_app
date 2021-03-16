import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Schedule} from "./components/Schedule/Schedule";


function App() {

    return (
        <div className="App">
            <Header/>
            <Schedule />
        </div>
    );
}

export default App;
