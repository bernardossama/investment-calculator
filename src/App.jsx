import Header from "./components/Header"
import Results from "./components/Results";
import UserInput from "./components/UserInput";
import { useState } from "react";

function App() {

  const [userInput,setUserInput] = useState({
    initialInvestment : 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
});

  const inputIsValid = userInput.duration >0;

function handleChange(inputType,newValue){
  setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputType]:+newValue 
      } ;
  });
}

  return ( <div>
    <Header/>
    <UserInput input={userInput} setInput={handleChange}/>
    {inputIsValid ? <Results input={userInput}/> : <p className="center">Please enter a duration more than 0</p>}
    </div>
    );
}

export default App
