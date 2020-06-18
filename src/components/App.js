import React from "react";
import "./App.css";
import UserContainer from "./user/container";

function App() {
  return (
    <div>
      <h1>React and Redux</h1>
      <p>
        Building a React and Redux app without using the create-react-app tool.
      </p>

      <hr />
      <UserContainer />
    </div>
  );
}

export default App;
