import React, { useState } from "react";
import styled from "styled-components";
import Filho from "./filho";

const Container = styled.div`
  width: 180px;
  margin: 100px;
  text-align: center;
  background: rgb(42, 41, 41);
  padding: 20px;
  border-radius: 35px;
`;

const Display = styled.div`
  color: rgb(250, 250, 250);
  font-size: 24px;
  padding: 10px;
  text-align: right;
  background: #333232;
  border-radius: 5px;
  margin-bottom: 8px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
`;

const App = () => {
  const [result, setResult] = useState("0");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(result).toString());
      } catch {
        setResult("Erro");
      }
    } else if (value === "AC") {
      setResult("0");
    } else if (value === "+/-") {
      setResult((prev) => (prev.startsWith("-") ? prev.slice(1) : "-" + prev));
    } else if (value === "%") {
      setResult((prev) => (parseFloat(prev) / 100).toString());
    } else {
      setResult((prev) => (prev === "0" || prev === "Erro" ? value : prev + value));
    }
  };

  return (
    <Container>
      <Display>
        <div className="numeroDigitado">{result}</div>
      </Display>

      <Buttons>
        <Filho valor="AC" cor="rgb(168, 168, 168)" callback={handleClick} />
        <Filho valor="+/-" cor="rgb(168, 168, 168)" callback={handleClick} />
        <Filho valor="%" cor="rgb(168, 168, 168)" callback={handleClick} />
        <Filho valor="/" cor="#ff9500" callback={handleClick} />
      </Buttons>

      <Buttons>
        <Filho valor="7" cor="#505050" callback={handleClick} />
        <Filho valor="8" cor="#505050" callback={handleClick} />
        <Filho valor="9" cor="#505050" callback={handleClick} />
        <Filho valor="*" cor="#ff9500" callback={handleClick} />
      </Buttons>

      <Buttons>
        <Filho valor="4" cor="#505050" callback={handleClick} />
        <Filho valor="5" cor="#505050" callback={handleClick} />
        <Filho valor="6" cor="#505050" callback={handleClick} />
        <Filho valor="-" cor="#ff9500" callback={handleClick} />
      </Buttons>

      <Buttons>
        <Filho valor="1" cor="#505050" callback={handleClick} />
        <Filho valor="2" cor="#505050" callback={handleClick} />
        <Filho valor="3" cor="#505050" callback={handleClick} />
        <Filho valor="+" cor="#ff9500" callback={handleClick} />
      </Buttons>

      <Buttons>
        <Filho valor="0" cor="#505050" callback={handleClick} />
        <Filho valor="." cor="#505050" callback={handleClick} />
        <Filho valor="=" cor="#ff9500" callback={handleClick} />
      </Buttons>
    </Container>
  );
};

export default App;

