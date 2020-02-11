import React from 'react';  
import './reg.css';  

class Popup extends React.Component {  
  state = { cn: '' }

  render() { 
      return (  
        <div className={this.props.cn}>  
        <div className='popup\_inner'>  
        <h1>{this.props.text}</h1>  
        <button className="btn" 
        style={{
          fontWeight: "bold",
          backgroundColor: "red",
          color: "#ECEBE7",
          boxShadow:
            "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"
        }}
        onClick={this.props.closePopup}>Okay</button>  
        </div>  
        </div>  
        );  

}  
}  

export default Popup;