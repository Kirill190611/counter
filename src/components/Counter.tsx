import React from 'react';
import {Button} from "./Button";

type CounterProps = {
    value: number
    clickHandler: () => void
    resetHandler: () => void
}

const MAX_VALUE = 5;

export const Counter = ({
                            value,
                            clickHandler,
                            resetHandler
                        }: CounterProps) => {

    return (
        <div className="counter">
            <div
                className={value !== MAX_VALUE ? "counter-display" : `${"counter-display"} + ${"counter-display-max "}`}>{value}</div>
            <div className={"buttons-wrapper"}>
                <Button className={value !== MAX_VALUE ? "button" : "button-disabled"}
                        onClick={clickHandler}
                        title="inc"/>
                <Button className={value !== 0 ? "button" : "button-disabled"}
                        title="reset"
                        onClick={resetHandler}/>
            </div>
        </div>
    );
};