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
 
    return(<
        div><div class="card">
        <img src="..." class="card-img-top" alt="..."></img>
        <div class="card-body">
               <h5 class="card-title">Protine-Powder</h5>
               <p class="card-text">
            <h4>This is a help to increase your body strength</h4>
            <h5>Quantity = {number}</h5>
            <button onClick = {e=>increment()}>+</button>
            <button onClick = {e=>Decrement()}>-</button></p>
            <a href="#" class="btn btn-primary">Delete</a>
            </div>
          </div>
          </div>
    )

}

export default CounterFunction;