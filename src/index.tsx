import React from "react";
import ReactDOM from "react-dom";
// import JSZip from "jszip";

if (module.hot) {
  module.hot.accept();
}

// const unzip = new JSZip();
const unzipFile = async () => {
  //   const unzipped = await unzip.loadAsync("/static/books/pg16328.epup");
  const test = await new Promise(() => {});
  //   console.log(unzipped);?
};

unzipFile();

console.log("Hello from tsx!");

ReactDOM.render(<p>Hello</p>, document.getElementById("root"));
