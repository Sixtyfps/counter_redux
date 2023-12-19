import React from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import {Settings} from "./Settings/Settings";

function App() {
    return (
        <div className="App">
            <Counter/>
            <Settings/>
        </div>
    )
}

export default App;
