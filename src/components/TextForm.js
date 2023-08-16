import React, { useState } from "react";
export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log('upper case was clicked');
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleOnChange = (event)=>{
        console.log('Handle on change');
        setText(event.target.value)
    }
    const [text, setText] = useState("enter the text here");
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="5"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick} >Convert to UpperCase</button>
        </div>
    );
}
