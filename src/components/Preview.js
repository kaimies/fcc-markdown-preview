import React from 'react';
import marked from 'marked';

const renderer = new marked.Renderer();

marked.setOptions({
    gfm: true,
    breaks: true,
});

renderer.link = (href, title, text) => {
    return `<a target="_blank" rel="noopener noreferrer" href="${href}" title="${title}">${text}</a>`;
};

const Preview = (props) => {
    return (
        <div 
            id="preview" 
            className="item" 
            dangerouslySetInnerHTML={{__html: marked(props.markdown, { renderer: renderer })}} 
        />
    )
}

export default Preview;
