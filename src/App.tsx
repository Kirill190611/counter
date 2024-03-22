import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";

export const MAX_VALUE = 5;
export const INIT_VALUE = 0;

function App() {

    const [value, setValue] = useState(INIT_VALUE);

    const clickHandler = () => {
        if (value >= MAX_VALUE) {
            return
        }
        setValue(value + 1);
    }

    const resetHandler = () => {
        setValue(INIT_VALUE)
    }

    return (
        <div className="app-wrapper">
            <Counter value={value}
                     clickHandler={clickHandler}
                     resetHandler={resetHandler}/>
        </div>
    );
}

export default App;
