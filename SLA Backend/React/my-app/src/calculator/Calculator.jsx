import { useState } from "react";

function Calculator() {
  const [display, setDisplay] = useState("0");
  const [expression, setExpression] = useState("");

  const handleClick = (value) => {
    if (value === "C") {
      setDisplay("0");
      setExpression("");
      return;
    }

    if (value === "=") {
      try {
        const result = evaluateExpression(expression);
        setDisplay(result.toString());
        setExpression(result.toString()); // Allow chaining
      } catch {
        setDisplay("Error");
        setExpression("");
      }
      return;
    }

    // Prevent invalid inputs (e.g., starting with operator)
    if (expression === "" && ["+", "-", "*", "/", "%"].includes(value)) return;

    const newExpression = expression + value;
    setExpression(newExpression);
    setDisplay(newExpression);
  };

  // Safe evaluator for basic operations (no eval!)
  const evaluateExpression = (expr) => {
    // Simple regex-based parser for +, -, *, /, %
    // This is basic; for complex math, use a library like mathjs
    const sanitized = expr.replace(/[^0-9+\-*/%.]/g, ""); // Remove invalid chars
    return Function(`"use strict"; return (${sanitized})`)(); // Safer than eval, but still cautious
  };

  return (
    <div style={{ fontFamily: "Arial", maxWidth: "300px", margin: "auto" }}>
      {/* Display */}
      <div style={{ border: "1px solid #ccc", padding: "10px", textAlign: "right", fontSize: "24px" }}>
        {display}
      </div>
    
      {/* Buttons - Grid Layout */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "5px", marginTop: "10px" }}>
        <button onClick={() => handleClick("C")} style={buttonStyle}>C</button>
        <button onClick={() => handleClick("00")} style={buttonStyle}>00</button>
        <button onClick={() => handleClick("%")} style={buttonStyle}>%</button>
        <button onClick={() => handleClick("/")} style={buttonStyle}>/</button>
        
        <button onClick={() => handleClick("7")} style={buttonStyle}>7</button>
        <button onClick={() => handleClick("8")} style={buttonStyle}>8</button>
        <button onClick={() => handleClick("9")} style={buttonStyle}>9</button>
        <button onClick={() => handleClick("*")} style={buttonStyle}>*</button>
        
        <button onClick={() => handleClick("4")} style={buttonStyle}>4</button>
        <button onClick={() => handleClick("5")} style={buttonStyle}>5</button>
        <button onClick={() => handleClick("6")} style={buttonStyle}>6</button>
        <button onClick={() => handleClick("-")} style={buttonStyle}>-</button>
        
        <button onClick={() => handleClick("1")} style={buttonStyle}>1</button>
        <button onClick={() => handleClick("2")} style={buttonStyle}>2</button>
        <button onClick={() => handleClick("3")} style={buttonStyle}>3</button>
        <button onClick={() => handleClick("+")} style={buttonStyle}>+</button>
        
        <button onClick={() => handleClick("0")} style={{ ...buttonStyle, gridColumn: "span 2" }}>0</button>
        <button onClick={() => handleClick(".")} style={buttonStyle}>.</button>
        <button onClick={() => handleClick("=")} style={buttonStyle}>=</button>
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: "15px",
  fontSize: "18px",
  border: "1px solid #ccc",
  backgroundColor: "#f9f9f9",
  cursor: "pointer",
};
export default Calculator;