import { useState } from "react";
import "./playbutton.css";

function Counter() {
  console.log("counter render");
  const [number, setCounter] = useState(0);
  function HandleClick(e) {
    e.stopPropagation();
    //for updating the state after executing the whole function
    // setCounter(number+1);
    //for instant update not really instant but act like one
    setCounter((number) => number + 1);

    console.log("number is", number);
  }
  return (
    <div className="bg-teal-950">
     
      <p className="text-4xl text-sky-400 font-bold mb-4">Welcome!</p>
      <h1 className="text-4xl text-sky-400 font-bold mb-4">{number}</h1>
      <button className="bg-teal-600" onClick={HandleClick}>
        Add
      </button>
    </div>
  );
}
export default Counter;
