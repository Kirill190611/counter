import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";


function App() {
    const maxValue = 5;
    const initValue = 0;

    const [value, setValue] = useState(initValue);

    const clickHandler = () => {
        if (value >= maxValue) {
            return
        }
        setValue(value + 1);
    }

    const resetHandler = () => {
        setValue(initValue)
    }

    return (
        <div className="app-wrapper">
            <Counter value={value}
                     clickHandler={clickHandler}
                     resetHandler={resetHandler}
                     maxValue={maxValue}
                     initValue={initValue}/>
        </div>
    );
}

export default App;
