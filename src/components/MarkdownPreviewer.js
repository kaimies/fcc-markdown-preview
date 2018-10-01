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
[Markdown Cheat Sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
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
