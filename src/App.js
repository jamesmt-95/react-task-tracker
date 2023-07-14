// import logo from "./logo.svg";
// import "./App.css";

import React from "react";

function App() {
  const name = "James"
  const score = 80;
  return (
    <React.Fragment>
      <div className="App">
        <h1>Hello from React</h1>
      </div>
      <div className="User">
        <h1>Hello {name}</h1>
        <p>You have scored {0 + score}, Status is: {score > 60 ? 'Pass' : 'Fail'}</p>
      </div>
      </React.Fragment>
  );
}

export default App;

//We are not using logo.svg, app.css, app.test.js etc.. so commenting
