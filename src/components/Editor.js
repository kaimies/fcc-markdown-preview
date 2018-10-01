import React from 'react';

const Editor = props => <textarea className="item" id="editor" value={props.markdown} onChange={props.onChange} />;

export default Editor;
