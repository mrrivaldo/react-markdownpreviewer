import React from "react";
import { useState } from "react";
import "./Editor.css";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import remarkGfm from "remark-gfm";

function Editor() {
  const [markDown, setMarkdown] = useState();
  const defaultText = `# Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:
  
  Heres some code, \`<div></div>\`, between 2 backticks.
  
 \`\`\`;
  // this is multi-line code:

  function anotherExample(firstLine, lastLine) {
    if (firstLine == "\`\`\`" && lastLine == "\`\`\`") {
      return multiLineCode;
    }
  }
  \`\`\`
  
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.org), and
  >Block Quotes!
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:
  
  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  `;

  return (
    <div className="container">
      <div className="wrap-editor">
        <i class="fa-solid fa-square-pen"></i>
        <span className="title-editor">Editor</span>
        <i class="fa-solid fa-maximize"></i>
      </div>
      <textarea
        id="editor"
        type="text"
        value={markDown}
        onChange={(e) => setMarkdown(e.target.value)}
      >
        {defaultText}
      </textarea>
      <div className="converter">
        <div className="container-previewer">
          <div className="toolbar">
            <i class="fa-solid fa-square-pen"></i>
            <span className="title-editor">Previewer</span>
            <i class="fa-solid fa-maximize"></i>
          </div>
          <div className="previewer" id="preview">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {markDown}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editor;
