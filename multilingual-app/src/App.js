import Counter from "./components/Counter";
import Languages from "./components/Languages";
import GMText from "./components/GMText";
import { useState } from "react";

function App() {
  let i = 0;
  const languages = ["Good Morning", "Buenos Días","בוקר טוב", "e kaaro",  "おはよう"]
  const [value, setValue] = useState(languages[i % languages.length]);
  let [fntSize, setFont] = useState(20);

  const handleClick = val => {
    
    if(val == "English"){
      setValue(languages[0])
    }
    else if(val == "Spanish"){
      setValue(languages[1])
    }
    else if(val == "Hebrew"){
      setValue(languages[2])
    }
    else if(val == "Yoruba"){
      setValue(languages[3])
    }
    else if(val == "Japanese"){
      setValue(languages[4])
    }
    else if(val == "+"){
      setFont(fntSize + 10)
     
    }
    else if(val == "-"){
      setFont(fntSize - 10)
      
    }

  };

  return (
    <div className="App">
      <Counter
      handleClick={handleClick} 
      />
      <GMText
        val={value}
        fnt={fntSize}
      />
      <Languages 
        handleClick={handleClick} 
      />
    </div>
  );
}

export default App;
