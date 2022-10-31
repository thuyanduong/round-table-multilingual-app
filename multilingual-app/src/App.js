import Counter from "./components/Counter";
import Languages from "./components/Languages";
import GMText from "./components/GMText";
import { useState } from "react";

function App() {
  let [greeting, setGreeting] = useState("Good Morning")
  let [fontSize, setFontSize] = useState(20)

  //state changing functions
  function changeGreeting(newGreeting){
    setGreeting(newGreeting)
  }

  //stat changning function
  function changeFontSize(increaseVal){
    setFontSize( prevState => prevState + increaseVal )
  }

  return (
    <div className="App">
      <Counter
        handleClick={changeFontSize} 
      />
      <GMText
        greeting={greeting}
        fontSize={fontSize}
      />
      <Languages 
        handleClick={changeGreeting} 
      />
    </div>
  );
}

export default App;
