import React, { Component } from 'react';
import './App.css'

import Sidebar1 from './Sidebar1';
import App1 from './App1';
import '../node_modules/swagger-ui/dist/swagger-ui.css'

import Navbar from './Navbar.js'
import {Route,Switch,Router} from 'react-router-dom';
import App2 from './App2';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        //organizationConfig: null,
        //xdefinitionList: null,
        definitionLink: "https://petstore3.swagger.io/api/v3/openapi.json"
      }
      this.updateDefinitionLink = this.updateDefinitionLink.bind(this)
    }

  // componentWillMount() {
  //   this.setState({
  //     organizationConfig: Config.orgData,
  //   })
  // }

  componentDidUpdate() {

    // SwaggerUI({
    //   domNode: document.getElementById("api-data"),
    //   url: this.state.definitionLink
    // })
  }

  updateDefinitionLink(newLink) {
    console.log("Hurrah we have got insde the update Definition Link");
    console.log(newLink);
    this.setState({
      definitionLink: newLink
      // console.log(definitionLink);
    })
    
  }

  
  render() {
    return (

      <div className="App">

        <Sidebar1
          updateDefinitionLink = {this.updateDefinitionLink}
        />

        
        <div className = "menu" > 
            <div className = "heading">
              <p>
              This is the menu bar we are having to toggle between Redocly and Swaggger
              </p>

              <Navbar />  

              {/* <Route path="/" component={} exact /> */}
                
                <Switch>
                
                <Route path="/Swagger"
                  exact component={() => <App2 value = {this.state.definitionLink} />}
                  />   
                  
                  <Route path="/" 
                   exact component={() => <App1 value = {this.state.definitionLink} />}
                  />    
  

              
                </Switch>

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