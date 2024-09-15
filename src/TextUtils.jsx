import React, { useState } from 'react';
import './TextUtils.css';
const Textutils = () => {
    const [Text, setText] = useState('');
    const ChangeHandle=(e)=>{
        setText(e.target.value);
        e.preventDefault();
    }
    const UpperCase=(e)=>{
        let uppercase=Text.toUpperCase();
        setText(uppercase);
        e.preventDefault();
    }
    const LowerCase=(e)=>{
      let lowercase=Text.toLowerCase();
      setText(lowercase);
      e.preventDefault();
    }
    const Cut=(e)=>{
      setText(" ");
      navigator.clipboard.writeText(Text);
      e.preventDefault();
    }
    const Copy=(e)=>{
      navigator.clipboard.writeText(Text);
      e.preventDefault();
    }
    const Paste=(e)=>{
      navigator.clipboard.readText().then(paremeter=>setText(`${paremeter} ${Text}`));
      e.preventDefault();
    }
    const Remove=(e)=>{
      setText(" ");
      e.preventDefault();
    }
    const RemoveExtraSpace=(e)=>{
      let cleanedText = Text.replace(/\s+/g,' ').trim();
      setText(cleanedText);
      e.preventDefault();
    }
    const Duplicate=(e)=>{
      let duplicateText =(Text+ " "+Text);
      setText(duplicateText);
      e.preventDefault();
    }
  return (
    <>
      <div className="Form-container">
        <form>
            <textarea name="txt" id="txt1" onChange={ChangeHandle} value={Text}></textarea><br/><br/>
            <button className="btn" onClick={UpperCase}>Uppercase</button>
            <button className="btn" onClick={LowerCase}>Lowercase</button>
            <button className="btn" onClick={Cut}>Cut</button>
            <button className="btn" onClick={Copy}>Copy</button><br/>
            <button className="btn" onClick={Paste}>Paste</button>
            <button className="btn" onClick={Remove}>Remove</button>
            <button className="btn" onClick={RemoveExtraSpace}>Remove extra space</button>
            <button className="btn" onClick={Duplicate}>Duplicate</button>
        </form>
      </div>
    </>
  )
}
export default Textutils
