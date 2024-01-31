import React from "react";
import TestComponent from './TestComponent'; // Import the TestComponent


// no need to modify anything in here. The second test is looking for the returned JSX from this component
function ExampleComponent() {
  return (
    <div className="example">
      <img
        src="https://s3.amazonaws.com/ironboard-learn/sunglasses.gif"
        alt="a deeply impressed man, perhaps thinking 'whoa'"
      />
      <p>Whoa!</p>
    </div>
  );
}

export default ExampleComponent;
