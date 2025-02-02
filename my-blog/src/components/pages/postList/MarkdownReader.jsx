import { useEffect, useState } from "react";
import React from "react";
import ReactMarkdown from "react-markdown";
import {useLocation} from "react-router-dom";
import "github-markdown-css";

function MarkdownReader(props){
    const [markdown, setMarkdown] = useState("");
    const fileName = useLocation().state.fileName;

    useEffect(()=>{
        fetch(`./blogposts/${fileName}`)
        .then((response)=>response.text())
        .then((text)=> setMarkdown(text));
    },[]);

    return(
        <article class = "markdown-body">
        <ReactMarkdown>
            {markdown}
        </ReactMarkdown>
        </article>
    );
}

export default MarkdownReader;