import React from "react";
import ReactDOM from "react-dom";
import JSZip from "jszip";

if (module.hot) {
  module.hot.accept();
}

// const unzip = new JSZip();
const unzipFile = async () => {
  const zipFile = await fetch("http://localhost:1234/books/pg16328.epub");
  const blob = await zipFile.blob();

  const unzipped = await JSZip.loadAsync(blob);

  console.log(unzipped);
};

unzipFile();

console.log("Hello from tsx!");

ReactDOM.render(<p>Hello</p>, document.getElementById("root"));
