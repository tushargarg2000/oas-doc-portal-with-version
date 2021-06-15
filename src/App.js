import React, { Component } from 'react';
import './App.css'
import Switch from "react-switch";
import '../node_modules/swagger-ui/dist/swagger-ui.css'
import Navbar from './Navbar.js'
//import {Route,Router} from 'react-router-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Sidebar from './Sidebar.js';

import Folder from './Folder.js';
import GlobalStyles from './styles/GlobalStyles';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {

        //checked: false,
        definitionLink: "https://petstore3.swagger.io/api/v3/openapi.json"
      }
      //this.handleChange = this.handleChange.bind(this);
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

    <GlobalStyles />
        {/* <Sidebar
          updateDefinitionLink = {this.updateDefinitionLink}
        /> */}

        <Router>
            <Route
              path="/"
              render={({ history, location, match }) => (
                <Folder
                  depth={0}
                  history={history}
                  match={match}
                  location={location}
                  name="storefront-display"
                  path="/storefront-display"
                />
              )}
            />
        </Router>


        

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
                    </div>
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