import React,{Component} from "react";
import {Link} from "react-router-dom";
import './Navbar.css';
//import Switch from '@material-ui/core/Switch';
//import {Switch} from "antd";
import Switch from "react-switch";
import { RedocStandalone } from 'redoc';
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"


function Type(props) {

  if(props.value){
    return (
      <div id = "api-data-redoc" >
      <RedocStandalone specUrl= {props.path} 
      options={{
          nativeScrollbars: false,
          theme: { colors: { primary: { main: '#dd5522' } } },
          // scroll-behavior: smooth
      }}
      
      />

      </div>

    );
  }
  else{
    return(
      <div id = "api-data-swagger" >
          
          <SwaggerUI url= {props.path} />
      </div>

    );
  }
}

class Navbar extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });

  }

  render() {
    return (

      <div>
      <div className = "big-div">
      <div className = "api-heading">
        
          <h1>API DOCS PORTAL</h1>
      </div>
      
      <div className = "navbar-top-side">
        
      <div className = "heading-1">
      <h2>Read Docs</h2>
      </div>
      <label>
        
        <label htmlFor="material-switch" className = "button-div">
          
          <Switch
            checked={this.state.checked}
            onChange={this.handleChange}
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            offColor="#86d3ff"
            offHandleColor="#2693e6"
            handleDiameter={36}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={28}
            width={60}
            className="heading-2"
            id="material-switch"
            
          />
        </label>

      </label>
      <div className = "heading-3">
      <h2>
        Try It Out
      </h2>
      </div>

      </div>


      </div>

       <Type value = {this.state.checked} path = {this.props.path} />
       
       </div>
    );
  }
}




// function Navbar() {
 
//   // const [state, setState] = React.useState({
//   //   checkedA: true,
//   //   checkedB: true,
//   // });

//   // const handleChange = (event) => {
//   //   setState({ ...state, [event.target.name]: event.target.checked });
//   // };

//   return (
//     <div>

//       <Link to="/">Get the Redoc version here </Link>
//       <br />
//       <Link to="/Swagger"> Get the Swagger version Here </Link>

//       {/* <Switch
//         defaultChecked
//         color="default"
//         inputProps={{ 'aria-label': 'checkbox with default color' }}
//       /> */}
      
//       <Switch checkedChildren= "Read Docs" unCheckedChildren= "Try-It-Out" defaultChecked size = "large" />

//       <Switch />
//       re
    
//     </div>

//   );
// };

export default Navbar;
