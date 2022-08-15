import React from "react";
import "./Previewer.css";
import ReactMarkdown from "react-markdown";

function Previewer(markDown) {
  return (
    <div className="converter">
      <div className="container-previewer">
        <div className="toolbar">
          <i class="fa-solid fa-square-pen"></i>
          <span className="title-editor">Previewer</span>
          <i class="fa-solid fa-maximize"></i>
        </div>
        <div className="previewer" id="preview">
          <ReactMarkdown>{markDown}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default Previewer;
