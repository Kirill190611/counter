import React from 'react';

type ButtonProps = {
    className: string
    onClick?: () => void
    title: string
}
export const Button = ({
                           className,
                           onClick,
                           title
                       }: ButtonProps) => {
    return (
        <button className={className}
                onClick={onClick}>{title}</button>
    );
};