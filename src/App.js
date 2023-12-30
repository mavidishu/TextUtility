import { useState } from 'react';
import './App.css';
import About from './Component/About';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import Alert from './Component/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [mode,setMode] = useState('light'); //state
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const toggleMode= ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#0b3f74';
      showAlert("Switched to Dark Mode","success");
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Switched to Light Mode","success");
    }
  };
  return (
    <>
      <Router>
        <Navbar title = "TextUtility" aboutText = "About Us" mode= {mode} toggleMode= {toggleMode}/> {/* passing title in component is props(property)*/}
        <Alert alert={alert}/>
        <div className="container">
          <Routes>
          <Route exact path='/' element={<TextForm heading ="Enter Text Here" showAlert={showAlert} mode={mode}/>}></Route>
            <Route exact path='/about' element={<About/>}></Route>
          </Routes>
        </div>
        
      </Router>
    </>
  );
}

export default App;
