import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";

const MAX_VALUE = 5;

function App() {

    const [value, setValue] = useState(0);

    const clickHandler = () => {
        if (value >= MAX_VALUE) {
            return
        }
        setValue(value + 1);
    }

    const resetHandler = () => {
        setValue(0)
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
