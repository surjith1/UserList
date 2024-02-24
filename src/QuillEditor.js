import React, {useState} from 'react';
import ReactQuill from 'react-quill';
import './App.css';
import "react-quill/dist/quill.snow.css"
let data = "<div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>"

const QuillEditor = () => {
    const [text,setText] = useState(data);
    const[saveDisable, setSaveDisable] = useState(false);
    console.log("value:", text);
    const handleSave =()=>{
      alert(text); 
      setSaveDisable(false)
    }
  return (
    <div>
     <div className='quill-editor'>
    <ReactQuill theme='snow' value={text} onChange={(html,delta,source)=>{
      if(source === "user") {
        console.log("User");
        setSaveDisable(true);
        setText(html)
      }
      else {
        console.log("API");
        setSaveDisable(false);
      }
    }
    } />
  </div>
  <button type='button' onClick={handleSave} disabled={!saveDisable}>Save</button>
    </div>
  )
}

export default QuillEditor
