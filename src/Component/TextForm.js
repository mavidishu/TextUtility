import React,{useState} from 'react' // useState is a hook

export default function TextForm(props) {
  const [ text,setText] = useState('Enter Text Here');
  const [url,setUrl] = useState('');
  let word;
  if(text.length === 0){
    word = 0;
  }else{
    word =  text.split(" ").length;
  }

  // Functionalities Built
  const handleCopy = ()=>{
    var textn = document.getElementById('textArea');
    textn.select();
    navigator.clipboard.writeText(textn.value);
    props.showAlert("Copied to clipboard","success");
  };

  const handleExtraSpace = ()=>{
    let newText = text.split(/[]+/);
    setText(newText.join(" "));
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
          <h1 className={`my-3 text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</h1>
        <label htmlFor="exampleFormControlTextarea1" className={`form-label text-${props.mode==='light'?'dark':'light'}`}>Input / Output</label>
        <textarea className="form-control" id= "textArea" value={text}a style={{backgroundColor:'white', color:'black'}} onChange={handleChange} rows="10"></textarea>
        <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert To UpperCase</button>
        <button className="btn btn-primary mx-3 my-3" onClick={handleLowClick}>Convert To LowerCase</button>
        <button className="btn btn-primary mx-3 my-3" onClick={clearTextArea}>Clear</button>
        <button className="btn btn-primary mx-3 my-3" onClick={extractUrl}>Extract URLs</button>
        <button className="btn btn-primary mx-3 my-3" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-3 my-3" onClick={handleExtraSpace}>Remove Extra Space</button>
        </div>
    </div>
    <div className="container">
      <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>Your Text Summary</h1>
      <p className={`text-${props.mode==='light'?'dark':'light'}`}>{word} words and {text.length} characters</p>
      <p className={`text-${props.mode==='light'?'dark':'light'}`}>{(word)*0.008} Minutes to read the summary</p>
      <h3 className={`text-${props.mode==='light'?'dark':'light'}`}>Preview</h3>
      <p className={`text-${props.mode==='light'?'dark':'light'}`}>{text.length>0?text:"Enter something to preview it here"}</p>
      <h3 className={`text-${props.mode==='light'?'dark':'light'}`}>URLs</h3>
      <p className={`text-${props.mode==='light'?'dark':'light'}`}>{url.length>0?url:"No urls there in text"}</p>
    </div>
    </>
  )
}
