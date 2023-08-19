import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
    const textRef = useRef();
    const handleUpClick = () => {
        let newText = text.trimEnd().toUpperCase();
        setText(newText);
        props.showAlert('Converted to Upper case!', 'success');
    };
    const handleLoClick = () => {
        let newText = text.trimEnd().toLowerCase();
        setText(newText);
        props.showAlert('Converted to Lower case!', 'success');

    };
    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert('Text has been cleared!', 'success');

    };
    const handleOnChange = (event) => {
        setText(event.target.value);
    };
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('Extra spaces has been cleared!', 'success');
    };
    const handleCopy = () => {
        textRef.current.select();
        navigator.clipboard.writeText(textRef.current.value);
        props.showAlert('Text copied to Clipboard!', 'primary');
        // let text = document.getElementById("myBox");
        // text.select();
        // navigator.clipboard.writeText(text.value);
    };
    const [text, setText] = useState("");
    return (
        <>
            <div>
                <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        ref={textRef}
                        className="form-control"
                        value={text}
                        placeholder={props.placeholder}
                        onChange={handleOnChange}
                        id="myBox"
                        rows="5"
                        style={{ background: props.mode === "dark" ? "grey" : "white" }}
                    ></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>
                    Convert to UpperCase
                </button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>
                    Convert to LowerCase
                </button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>
                    Clear Text
                </button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>
                    Copy Text
                </button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
                    Remove Extra Spaces
                </button>
            </div>
            <div className="conatiner my-3" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h4>Your text summary</h4>
                <p>
                    {text.split(" ").length} words {text.length} characters. <br />
                </p>
                <p>{0.008 * text.split(" ").length} minutes read.</p>
                <h4>Preview:</h4>
                <p>{text.length > 0 ? text : "Enter something to preview it here!"}</p>
            </div>
        </>
    );
}
TextForm.propTypes = {
    placeholder: PropTypes.string,
};

TextForm.defaultProps = {
    placeholder: "enter the text here",
};
