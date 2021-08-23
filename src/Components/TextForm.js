import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlerts('Converted to Uppercase!', 'success');
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlerts('Converted to Lowercase!', 'success');
    }

    const handleClearClick = () => {
        let newText = ''
        setText(newText);
        props.showAlerts('Text Cleared!', 'success');
    }
    // copy text
    const handleCopyClick = () => {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlerts('Copy to Clipboard!', 'success');
    }
    // remove Extra Space    
    const removeExtraSpace = () => {
        let newText=text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlerts('Extra spaces removed!', 'success');
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    return (
        <div>
            <div>
                <h1>{props.heading}</h1>
                <div className="my-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" placeholder='Enter Text Here' style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'grey' }}></textarea>
                </div>
                <button className='btn btn-primary mx-1' onClick={handleUpClick}>Conver to Uppercase</button>
                <button className='btn btn-primary mx-1' onClick={handleLoClick}>Conver to Lowercase</button>
                <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear Text</button>
                <button className='btn btn-primary mx-1' onClick={handleCopyClick}>Copy Text</button>
                <button className='btn btn-primary mx-1' onClick={removeExtraSpace}>Remove Extra Spaces</button>
            </div>
            <div className="my-3">
                <h2>Your Text Summary</h2>
                <p><b>{text.split(" ").length - 1}</b> words and <b>{text.length}</b> characters</p>
                <p><b>{0.008 * text.split(" ").length}</b> Minutes to read.</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter something in the textbox above to preview it here.'}</p>
            </div>
        </div>
    )
}
