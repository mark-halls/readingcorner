import React from "react";
import ReactDOM from "react-dom";

if (module.hot) {
  module.hot.accept();
}

console.log("Hello from tsx!");

ReactDOM.render(<p>Hello</p>, document.getElementById("root"));
