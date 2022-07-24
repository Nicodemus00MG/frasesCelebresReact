import { useState } from "react";

import "./App.css";
import Data from "./data/Data.json"
function App() {
  const [_color, setIsColor] = useState(false);

  let numRandom = parseInt(Math.random() * 1000);

  let numRandomChar=parseInt(Math.random() * 100+1)
  let autor=Data[numRandomChar].author

  let quote=Data[numRandomChar].quote
console.log(autor)
  function cambiarColor() {
    setIsColor(!_color);
  }
  

  const colorRandom = _color ? `#${numRandom}` : `#${numRandom}`;

  const styleBG = {
    height: "100vh",
    width: "100vw",
    backgroundColor: colorRandom,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    position: "center",
  };

  const styleCard = {
    display:"flex",
    flexDirection:"column",
    gap:".3rem",
    height: "300px",
    width: "650px",
    padding:"3rem",
    backgroundColor: "#fff",
    justifyContent:"space-between",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
  };

const styleButtom={
  display:"flex",
  justifyContent:"center",
    
    border: "none",
    width: "35px",
    height: "35px",
    borderRadius: "50%",
    backgroundColor:colorRandom,
    color:"#fff",
    cursor:"pointer",
    
    fontSize:"1.8em"
  }

  return (
    <body style={styleBG}>
      <div style={styleCard} className="cardContainer">
        <div className="boxQuote">
          <div className="svgContainer">
          <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          fill={`#${numRandom}`}
          width={"100%"}
        >
          <path d="M96 224C84.72 224 74.05 226.3 64 229.9V224c0-35.3 28.7-64 64-64c17.67 0 32-14.33 32-32S145.7 96 128 96C57.42 96 0 153.4 0 224v96c0 53.02 42.98 96 96 96s96-42.98 96-96S149 224 96 224zM352 224c-11.28 0-21.95 2.305-32 5.879V224c0-35.3 28.7-64 64-64c17.67 0 32-14.33 32-32s-14.33-32-32-32c-70.58 0-128 57.42-128 128v96c0 53.02 42.98 96 96 96s96-42.98 96-96S405 224 352 224z" />{" "}
        </svg>
          </div>
        
        <div className="quoteDataBox">
        <h2>{`" ${quote} "`}</h2>
        </div>
        
        </div>
       
        <h3>{autor}</h3>
        <div className="buttomCointainer">
        <button style={styleButtom} onClick={cambiarColor} className="button">{`>`}</button>
        </div>
        
      </div>
    </body>
  );
}

export default App;
