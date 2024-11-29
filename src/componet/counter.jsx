import { useState }  from "react";
import './counter.css'
function counter (){
    const [counter , setCounter]=useState(0)
    return(
        <div className="main">
            <h1>Counter App</h1>
            <h1 style={{ color: 'white' }}> {counter}</h1>
            <button className="incre"  onClick={() => setCounter(counter + 1)}>Increment</button>
            <button className="reset" disabled= {counter == 0} onClick={() => setCounter(0)}  >RESET</button>
            <button className="decre" disabled={counter == 0}  onClick={() => setCounter(counter - 1)}>Decrement</button>
        </div>
    )

}
export default counter;
