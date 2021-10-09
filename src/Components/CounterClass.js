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
             <div><div class="card">
             <img src="..." class="card-img-top" alt="..."></img>
           
             <div class="card-body">
               <h5 class="card-title">Protine-Powder</h5>
               <p class="card-text"> <h4>This is help to increase body strength</h4>
                <h5>Quantity = {this.state.number}</h5>
                <button onClick = {this.increment}>+</button>
                <button onClick = {this.decrement}>-</button></p>
               <a href="#" class="btn btn-primary">Delete</a>
             </div>
           </div>
           </div>

         )
     }
 }

 export default CounterClass;