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

  const cover = await unzipped
    .file(
      "OEBPS/@export@sunsite@users@gutenbackend@cache@epub@16328@16328-cover.png"
    )
    ?.async("base64");
  console.log(cover);
  ReactDOM.render(
    <img src={`data:image/png;base64, ${cover}`} />,
    document.getElementById("root")
  );
};

unzipFile();

console.log("Hello from tsx!");

ReactDOM.render(<p>Hello</p>, document.getElementById("root"));
