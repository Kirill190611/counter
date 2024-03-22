import React from 'react';
import {Button} from "./Button";

type CounterProps = {
    value: number
    clickHandler: () => void
    resetHandler: () => void
    maxValue: number
    initValue: number
}

export const Counter = ({
                            value,
                            clickHandler,
                            resetHandler,
                            maxValue,
                            initValue
                        }: CounterProps) => {

    return (
        <div className="counter">
            <div className={value !== maxValue ? "counter-display" : `${"counter-display"} + ${"counter-display-max"}`}>{value}</div>
            <div className={"buttons-wrapper"}>
                <Button className={value !== maxValue ? "button" : "button-disabled"}
                        onClick={clickHandler}
                        title="inc"/>
                <Button className={value !== initValue ? "button" : "button-disabled"}
                        title="reset"
                        onClick={resetHandler}/>
            </div>
        </div>
    );
};