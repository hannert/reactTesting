import React from 'react';
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide']

const COLOR = ['primary', 'blue', 'red']

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize, 
    buttonColor}) => {
        // These check if button aspect is in aforementioned array, if not, go default style/size/color
        const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
        const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
        const checkButtonColor = SIZES.includes(buttonColor) ? buttonColor : COLOR[0]


        return (
            <button className={`
            btn ${checkButtonStyle} 
            ${checkButtonSize}
            ${checkButtonColor}`} onClick={onClick} type={type}>(children)</button>
        )
    };