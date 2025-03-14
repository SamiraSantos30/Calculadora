import React from "react";

const Filho = ({ valor, cor, callback }) => {
  return (
    <button
      style={{
        backgroundColor: cor,
        color: "white",
        fontSize: "25px",
        padding: "10px",
        margin: "1px",
        border: "none",
        borderRadius: "45px",
        cursor: "pointer",
        width: "100px", 
        height: "40px",
      }}
      onClick={() => callback(valor)}
    >
      {valor}
    </button>
  );
};

export default Filho;
