import React from "react";


export default function Text(props) {
    return (
        <div className="text-container"> 
            <p className="main-text" style={{fontSize: props.fontSize}}> {props.greeting} </p>
        </div>
    )
}