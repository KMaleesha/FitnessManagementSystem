 import React from "react";

 class CounterClass extends React.Component{
     constructor(){
         super();
         this.increment = this.increment.bind(this)
         this.decrement = this.decrement.bind(this)
         this.state = {
             number: 0
         }
     }

     increment(){
         this.setState({
             number: ++this.state.number
         })
     }

     decrement(){
         this.setState({
             number: --this.state.number
         })
     }
     render(){
         return(
             <div>
                 <h3>Protine-Powder</h3>
                 <h4>This is help to increase body strength</h4>
                <h5>Quantity = {this.state.number}</h5>
                <button onClick = {this.increment}>+</button>
                <button onClick = {this.decrement}>-</button>
             </div>
         )
     }
 }

 export default CounterClass;