import React from "react";
import { format } from "date-fns";
import ExampleComponent from "./ExampleComponent";
import TestComponent from "./TestComponent"; // Importing TestComponent

function App() {
  return (
    <div className="App">
      <h1>Now</h1>
      <p className="App-intro">q
        In React apps, we write JSX - it looks like HTML, and uses a lot of HTML
        syntax. JSX lets us include JavaScript functions right along with the
        HTML, and also allows us to add in components, which are separate,
        self-contained chunks of JSX.
      </p>
      <ExampleComponent/>
      <TestComponent />
    </div>
  );
}

export default App;
