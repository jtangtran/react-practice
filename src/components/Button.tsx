import { useState } from "react";
import Alert from "./Alert";

interface ButtonProps {
    children : string;
    buttonColour?: string;
}

const Button = ({children, buttonColour = 'primary'} : ButtonProps) => {
    let [buttonCount, setButtonCount] = useState(0);
    let [buttonPressed, setButtonPressed] = useState(false)

    const handleButtonClick = () => {
        setButtonPressed(!buttonPressed);
    }
  return (
    <>
    {buttonPressed &&
        <Alert onButtonClick={handleButtonClick}>
            My alert
        </Alert>
    }
    <button type="button" className={"btn btn-" + buttonColour} onClick={handleButtonClick}>{children}</button>
    </>
  )
}

export default Button;