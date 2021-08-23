import { Component } from "react";

class Counter extends Component {
    state = {count : 0,
    }

    onIncrement = () => {
        this.setState((prevState) => ({count : prevState.count+1}))
        
    }

    onDecrement = () => {
        this.setState((prevState) => ({count : prevState.count-1}))
    }

    onReset = () => {
        this.setState({count : 0})
    }

    render(){
        const {count} = this.state
        let colour = "black"
        if(count > 0){
            colour = "green"
        }
        else{
            if(count == 0){
                colour = "black"
            }
            else{
                colour = "red"
            }
          
        }
       
       
        return(
            <div>
                <h1>Counter <span style = {{color : `${colour}`}}>{count}</span></h1>
                <button onClick = {this.onIncrement}>Increase
                </button>
                <button onClick = {this.onReset}>Reset</button>
                <button onClick = {this.onDecrement}>Decrease</button>

            </div>
        )
    }
}

export default Counter