// Import
import React from "react";


// Function
export default function About(props) {  
  return (
    <div className= {`container text-${props.mode==='light'?'dark':'light'}`}>
        <h3 className="my-3">About Our textUtility</h3>
        <div className="desc"><h6> Experience the Power of Words with TextHub  Where Your Texts Take Center Stage!</h6></div>
      <div className="accordion my-3" id="accordionExample" >
        <div className="accordion-item">
          <h2 className="accordion-header" >
            <button
              className="accordion-button "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{backgroundColor:`${props.mode==='light'?'white':'#0b3f74'}`, color:`${props.mode==='light'?'black':'white'}`}}
            >
              Our Mission: Unleashing the Potential of Text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{backgroundColor:`${props.mode==='light'?'white':'#0b3f74'}`, color:`${props.mode==='light'?'black':'white'}`}}>
            Our mission is simple yet profound: to empower individuals and communities by providing a comprehensive suite of text utilities that cater to diverse linguistic needs. Whether you're a seasoned writer aiming for perfection, a student striving for clarity, or a professional communicating with precision, TextHub is here to support you on your linguistic journey.
            </div>
          </div>
        </div>
        <div className="accordion-item" >
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{backgroundColor:`${props.mode==='light'?'white':'#0b3f74'}`, color:`${props.mode==='light'?'black':'white'}`}}
            >
              About TextHub: Empowering Your Words, Enhancing Your Texts
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{backgroundColor:`${props.mode==='light'?'white':'#0b3f74'}`, color:`${props.mode==='light'?'black':'white'}`}}>
            Welcome to textUtility, where the art and science of text meet in a harmonious symphony of <strong>linguistic empowerment</strong>. At textUtility, we believe that words have the power to shape ideas, connect minds, and convey emotions. Our platform is more than just a collection of text utilities; it's a creative space designed to elevate your writing experience and enhance the impact of your words.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{backgroundColor:`${props.mode==='light'?'white':'#0b3f74'}`, color:`${props.mode==='light'?'black':'white'}`}}
            >
              Innovation in Simplicity
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{backgroundColor:`${props.mode==='light'?'white':'#0b3f74'}`, color:`${props.mode==='light'?'black':'white'}`}}>
            
              We believe that powerful tools should be accessible to everyone. <code> textUtility</code> boasts an <strong>intuitive interface </strong>that makes our suite of utilities easy to use, ensuring that you can focus on your content without any technological barriers.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{backgroundColor:`${props.mode==='light'?'white':'#0b3f74'}`, color:`${props.mode==='light'?'black':'white'}`}}
            >
              Versatility in Functionality
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{backgroundColor:`${props.mode==='light'?'white':'#0b3f74'}`, color:`${props.mode==='light'?'black':'white'}`}}>
            
            TextHub is not a one-size-fits-all solution. Our platform offers a wide array of tools from basic grammar checks to advanced language translations  providing the versatility needed to meet the unique demands of various users.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
