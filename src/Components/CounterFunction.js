import React, { useState } from "react";
import App from "../App";

function CounterFunction(){

let[number, setNumber] = useState(0)
function increment(){
    setNumber(++number)

}
function Decrement(){
    setNumber(--number)

}
 
    return(
        <div>
            <image src =""></image>
            <h3>Protine-Milk</h3>
            <h4>This is a help to increase your body strength</h4>
            <h5>Quantity = {number}</h5>
            <button onClick = {e=>increment()}>+</button>
            <button onClick = {e=>Decrement()}>-</button>
        </div>
    )

}

export default CounterFunction;