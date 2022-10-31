import React from "react";


export default function Text(props) {
    let val = props.val;
    let fntSize = props.fnt;

    let styleObj = {
        fontSize: Number(fntSize)
    }
    console.log(fntSize)

    return (
        <div className="text-container"> 
            <p className="main-text" style={styleObj} > {val} </p>
        </div>
        
    )
}