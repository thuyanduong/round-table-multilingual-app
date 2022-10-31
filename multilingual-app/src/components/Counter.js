import React from "react";
import '../css/counter.css'


export default function Counter(props){
    
    return (
        <div className="button-container"> 
            <button class="button-30" onClick={() => {props.handleClick(10)}}>+</button>
            <button class="button-30" onClick={() => {props.handleClick(-10)}}>-</button>
        </div>
    )
}
