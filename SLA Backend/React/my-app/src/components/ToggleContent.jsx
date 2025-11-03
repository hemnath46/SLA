import { useState } from "react";
function ToggleContent() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleContent = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div> 
      <button onClick={toggleContent}>
        {isVisible ? "Hide Content" : "Show Content"}
      </button>
      {isVisible && (
        <div>
          <h3>Hidden Message</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, at!</p>
        </div>
      )}
    </div>
  );
}
export default ToggleContent;