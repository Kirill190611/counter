import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {CounterSettings} from "./components/CounterSettings";


function App() {
    const [maxValue, setMaxValue] = useState(0)
    const [startValue, setStartValue] = useState(0);

    const MAX = maxValue;
    const INIT = startValue;

    const [value, setValue] = useState(INIT);

    const clickHandler = () => {
        if (value >= MAX) {
            return
        }
        setValue(value + 1);
    }

    const resetHandler = () => {
        setValue(INIT)
    }

    const onClickSetMaxValue = () => {
        setMaxValue(maxValue + 1);
    }

    const onClickSetStartValue = () => {
        setStartValue(startValue + 1)
    }

    return (
        <div className="app-wrapper">
            <CounterSettings onClickSetMaxValue={onClickSetMaxValue}
                             maxValue={maxValue}
                             onClickSetStartValue={onClickSetStartValue}
                             startValue={startValue}/>
            <Counter value={value}
                     clickHandler={clickHandler}
                     resetHandler={resetHandler}
                     maxValue={MAX}
                     initValue={INIT}/>
        </div>
    );
}

export default App;
