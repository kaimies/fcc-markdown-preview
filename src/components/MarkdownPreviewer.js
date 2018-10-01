import React, { Component } from "react";
import Editor from "./Editor";
import Preview from "./Preview";

import './MarkdownPreviewer.css'

class MarkdownPreviewer extends Component {
  state = {
    markdown: 
`

# Hello
## This is a markdown editor

[Here is a link to a markdown cheat sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

**You can make text bold**

Inline \`code\` has \`back-ticks around\` it.

\`\`\`
No language indicated, so no syntax highlighting. 
But let's throw in a <b>tag</b>.
\`\`\`

1. First ordered list item
2. Another item

> You can create block quotes

![alt text](https://via.placeholder.com/350x150 "Placeholder Image")
`,
  };

  handleEditorInputChange = (e) => {
    this.setState({ markdown: e.target.value });
  }

  render() {
    return (
      <div>
        <header>
          <h1>Markdown Previewer</h1>
          <a href="https://github.com/kaimies/fcc-markdown-preview" target="_blank" rel="noopener noreferrer">Source Code</a>
        </header>
        <div className="container">
          <Editor markdown={this.state.markdown} onChange={this.handleEditorInputChange} />
          <Preview markdown={this.state.markdown}/>
        </div>
      </div>
    );
  }
}

export default MarkdownPreviewer;
