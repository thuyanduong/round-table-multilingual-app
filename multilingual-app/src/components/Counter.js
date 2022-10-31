import React from "react";
import '../css/counter.css'


export default function Counter({handleClick}){
    
    function changeValue(e){
        handleClick(e.target.innerText)
    }

    return (
        <div className="button-container"> 
            <button class="button-30" role="button" onClick={changeValue}>+</button>
            <button class="button-30" role="button" onClick={changeValue}>-</button>

        </div>
    )
}
