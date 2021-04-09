import React from "react";
import ReactDom from "react-dom";

// must capitablize 1st leter
// this is a component
function Greeting() {
  return <h1>This is Jognny</h1>;
}

ReactDom.render(<Greeting />, document.getElementById("root"));
