import React from "react";
import ReactDOM from "react-dom";

function Home() {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}

ReactDOM.render(
  <Home />, 
  document.getElementById("root")
);