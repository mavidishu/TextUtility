// Import
import React,{useState} from 'react' // useState is a hook

// Function
export default function TextForm(props) {
  const [ text,setText] = useState('Enter Text Here');
  const [url,setUrl] = useState('');

  // Functionalities Built
  const handleCopy = ()=>{
    var textn = document.getElementById('textArea');
    textn.select();
    navigator.clipboard.writeText(textn.value);
    props.showAlert("Copied to clipboard","success");
  };

  const handleExtraSpace = ()=>{
    let newText = text.replace(/\s+/g, ' ').trim();
    setText(newText);
  }
  const extractUrl = ()=>{
    let urlRegex = /(https?:\/\/[^\s]+)/g;

    // Use match() to find all matches in the text
    let matches = text.match(urlRegex);
    if(matches!= null){
      console.log(matches.length);
      if(matches.length === 0){
        props.showAlert("No Urls Founds","warning");
      }else{
        let newUrl = '';
        for(let i=0;i<matches.length;i++){
          newUrl += '"'+matches[i]+'", ';
        }
        props.showAlert("Urls Found check below in url section","success");
        setUrl(newUrl);
      }
    }
  }
  const clearTextArea = ()=>{
    let newText = "";
    setText(newText);
    props.showAlert("Input Area Cleaned","primary");
  }
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Input Converted into Upper Case","success");
  }
  const handleLowClick= ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Input Converted into Lower Case","success");
  }
  const handleChange = (event)=>{
    setText(event.target.value);// updating text ongoing
  }

  
  // updation function
  // setText("yeah boiiii");
  return (
    <>
    <div>
        <div className="mb-3">
          <h1 className={`my-2 text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</h1>
        <label htmlFor="exampleFormControlTextarea1" className={`form-label text-${props.mode==='light'?'dark':'light'}`}>Input / Output</label>
        <textarea className="form-control my-2" id= "textArea" value={text}a style={{backgroundColor:'white', color:'black'}} onChange={handleChange} rows="10"></textarea>
        <button disabled={text.length===0} className="btn btn-primary my-1" onClick={handleUpClick}>Convert To UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleLowClick}>Convert To LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={clearTextArea}>Clear</button>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={extractUrl}>Extract URLs</button>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleExtraSpace}>Remove Extra Space</button>
        </div>
    </div>
    <hr style={{border:`1px solid ${props.mode==='light'?'black':'white'}`,}}/>
    <div className="container">
      <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>Your Text Summary</h1>
      <p className={`text-${props.mode==='light'?'dark':'light'}`}>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p className={`text-${props.mode==='light'?'dark':'light'}`}>{(text.split(" ").filter((element)=>{return element.length!==0}).length)*0.008} Minutes to read the summary</p>
      <h3 className={`text-${props.mode==='light'?'dark':'light'}`}>Preview</h3>
      <p className={`text-${props.mode==='light'?'dark':'light'}`}>{text.length>0?text:"Enter something to preview it here"}</p>
      <h3 className={`text-${props.mode==='light'?'dark':'light'}`}>URLs</h3>
      <p className={`text-${props.mode==='light'?'dark':'light'}`}>{url.length>0?url:"No urls there in text"}</p>
    </div>
    </>
  )
}
