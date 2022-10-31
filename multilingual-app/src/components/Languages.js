import React from "react";
import GMText from "./GMText.js"
import '../css/languages.css'

export default function Languages({handleClick}){
    
    function changeValue(e){

        handleClick(e.target.innerText)
    }

    return (
            <div className="language-btn-container">
                <button class="button-52" role="button" onClick={changeValue} >English</button>
                <button class="button-52" role="button" onClick={changeValue}>Spanish</button>
                <button class="button-52" role="button" onClick={changeValue}>Hebrew</button>
                <button class="button-52" role="button" onClick={changeValue}>Yoruba</button>
                <button class="button-52" role="button" onClick={changeValue}>Japanese</button>
            </div>
    )
}
