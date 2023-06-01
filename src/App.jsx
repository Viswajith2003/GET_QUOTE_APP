import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [advice, setadvice] = useState("");
  const GetAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => {
        console.log(res.data.slip.advice);
        setadvice(res.data.slip.advice);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-black h-screen justify-center items-center pt-40">
      <div className="">
        <div className="flex justify-center items-center ">
          <b>
            <p className="italic border-4 border-indigo-500/100 w-96 h-28 rounded-lg bg-gray-400 text-center text-black pt-6">
              {advice}
            </p>
          </b>
        </div>
        <div className="flex justify-center items-center m-5">
          <button
            onClick={GetAdvice}
            className="bg-yellow-400 hover:bg-yellow-500 w-52 h-10 rounded-full hover:scale-95 transition"
          >
            <b>GET QUOTE</b>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
