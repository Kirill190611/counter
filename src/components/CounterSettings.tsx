import React from 'react';
import {Button} from "./Button";

type CounterSettingsProps = {
    onClickSetMaxValue: () => void
    maxValue: number
    onClickSetStartValue: () => void
    startValue: number
}

export const CounterSettings = ({
                                    onClickSetMaxValue,
                                    maxValue,
                                    onClickSetStartValue,
                                    startValue,
                                }: CounterSettingsProps) => {

    return (
        <div className="counter">
            <div className="counter-settings">
                <div className="settings-wrapper">
                    <span className="settings-text">Max value: </span>
                    <div className="settings-value"
                         onClick={onClickSetMaxValue}>{maxValue}</div>
                </div>
                <div className="settings-wrapper">
                    <span className="settings-text">Start value: </span>
                    <div className="settings-value"
                         onClick={onClickSetStartValue}>{startValue}</div>
                </div>
            </div>
            <div className="buttons-wrapper">
                <Button className="button"
                        title="set"/>
            </div>
        </div>
    );
};