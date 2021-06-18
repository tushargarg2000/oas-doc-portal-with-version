import React, {Component} from "react";
import './Navbar.css';
import Switch from "react-switch";
import {RedocStandalone} from 'redoc';
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

function Type(props) {

  const copyPath =  props.path;
  
  const extension = copyPath.split(".").pop(); //checking if extension is valid with this or not
  console.log("extension is ",extension);
  if(extension!="yaml"){
  return (
    <div className = "extension">
      Welcome to API docs definition 
      Please select a file to view the documentation from the Sidebar

    </div>

  );
  }
  else if (props.value) {

    return (
      <div id="api-data-swagger">
        <SwaggerUI url= {props.path} />
        {/*<SwaggerUI url="./storefront-display/payements/asgard/asgard.yaml"/>*/}
       {/*<SwaggerUI url="http://localhost:3000/storefront-display/payements/pps/pps.yaml"/>*/}
      </div>
    );

  } 
  else {
    return (
      <div id="api-data-redoc">
        <RedocStandalone specUrl={props.path}
                         options={{
                           nativeScrollbars: false,
                           theme: {colors: {primary: {main: '#dd5522'}}},
                           // scroll-behavior: smooth
                         }}

        />

      </div>

    );
  }
}

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {checked: false};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({checked});
  }

  render() {
    console.log(";;;", this.props)
    return (
      <div>
        <div className="big-div">
          <div className="api-heading">

            <h1>API DOCS PORTAL</h1>
          </div>

          <div className="navbar-top-side">

            <div className="heading-1">
              <h2>Read Docs</h2>
            </div>
            <label>
              <label htmlFor="material-switch" className="button-div">
                <Switch
                  checked={this.state.checked}
                  onChange={this.handleChange}
                  onColor="#86d3ff"
                  onHandleColor="#2693e6"
                  offColor="#F08080"
                  offHandleColor="#DC143C"
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
            <div className="heading-3">
              <h2>
                Try It Out
              </h2>
            </div>

          </div>


        </div>

        <Type value={this.state.checked} path={this.props.path}/>

      </div>
    );
  }
}

export default Navbar;
