import React, { Component } from 'react';
import './App.css'
import Switch from "react-switch";

import Sidebar1 from './Sidebar1';
import App1 from './App1';
import '../node_modules/swagger-ui/dist/swagger-ui.css'
import { RedocStandalone } from 'redoc';
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"
import Navbar from './Navbar.js'
import {Route,Router} from 'react-router-dom';
import Sidebar2 from './Sidebar2';

import Sidebar from './Sidebar.js';
//import Sidebar from './Sidebar3';


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {

        checked: false,
        definitionLink: "https://petstore3.swagger.io/api/v3/openapi.json"
      }
      this.handleChange = this.handleChange.bind(this);
      this.updateDefinitionLink = this.updateDefinitionLink.bind(this)
    }

  updateDefinitionLink(newLink) {
    //console.log("Hurrah we have got insde the update Definition Link");
    //console.log(newLink);
    this.setState({
      definitionLink: newLink
      // console.log(definitionLink);
    })
    
  }
  handleChange(checked) {
    this.setState({ checked });

  }

  
  render() {
    return (

      <div className="App">

        <Sidebar
          updateDefinitionLink = {this.updateDefinitionLink}
        />


        

        {/* <Sidebar2 updateDefinitionLink = {this.updateDefinitionLink}/> */}
        
        <div className = "menu" > 
            <div className = "heading">
              {/* <p>
              This is the menu bar we are having to toggle between Redocly and Swaggger
              </p> */}

              <Navbar path = {this.state.definitionLink} />  

              {/*
               <label>
                   <Link to="/">Get the Redoc version here </Link>
                  <br />
                  <Link to="/Swagger"> Get the Swagger version Here </Link> 

                    <div className="example">
                    <h2>Custom styling</h2>
                    
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
                        className="react-switch"
                        id="material-switch"
                      />
                    
                  </div>
                  
                  <Type value = {this.state.checked} path = {this.state.definitionLink} />
              </label>
              
              */}




                
                {/* <Switch>
                
                {/* <Route path="/Swagger"
                  exact component={() => <App2 value = {this.state.definitionLink} />}
                  />   
                  
                  <Route path="/" 
                   exact component={() => <App1 value = {this.state.definitionLink} />}
                  />    
  

              
                </Switch> */} 

            </div>
            

        {/* <App1 definition = {this.state.definitionLink} /> */}
        {/* <App1 />   */}
        
        {/* <Tree
            className="class1 class2 class3"
            basePath="./storeFront"
            disableContextMenu={true}
            onItemSelected={selectedItem => console.log(selectedItem)}
            fsTreeViewUrl = "http://localhost:3000"
        /> */}

        {/* <App1 value= {this.state.definitionLink} /> */}
        {/* <div id="api-data" /> */}
        
         </div> 

      </div>
        
    );
  }
}

export default App;