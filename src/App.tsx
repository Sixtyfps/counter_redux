import React from 'react';
import {Counter} from "./Counter/Counter";
import {Settings} from "./Settings/Settings";
import s from './App.module.css'

function App() {
    return (
        <div className={s.App}>
            <Counter />
            <Settings />
        </div>
    )
}

export default App;
