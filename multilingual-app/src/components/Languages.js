import React from "react";
import '../css/languages.css'

export default function Languages({handleClick}){

    return (
            <div className="language-btn-container">
                <button class="button-52" onClick={() => handleClick("Good Morning")} >English</button>
                <button class="button-52" onClick={() => handleClick("Buenos Días")}>Spanish</button>
                <button class="button-52" onClick={() => handleClick("בוקר טוב")}>Hebrew</button>
                <button class="button-52" onClick={() => handleClick("e kaaro")}>Yoruba</button>
                <button class="button-52" onClick={() => handleClick("おはよう")}>Japanese</button>
            </div>
    )
}
