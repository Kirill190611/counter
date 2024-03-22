import React from 'react';
import {Button} from "./Button";
import {INIT_VALUE, MAX_VALUE} from "../App";

type CounterProps = {
    value: number
    clickHandler: () => void
    resetHandler: () => void
}

export const Counter = ({
                            value,
                            clickHandler,
                            resetHandler
                        }: CounterProps) => {

    return (
        <div className="counter">
            <div className={value !== MAX_VALUE ? "counter-display" : `${"counter-display"} + ${"counter-display-max"}`}>{value}</div>
            <div className={"buttons-wrapper"}>
                <Button className={value !== MAX_VALUE ? "button" : "button-disabled"}
                        onClick={clickHandler}
                        title="inc"/>
                <Button className={value !== INIT_VALUE ? "button" : "button-disabled"}
                        title="reset"
                        onClick={resetHandler}/>
            </div>
        </div>
    );
};