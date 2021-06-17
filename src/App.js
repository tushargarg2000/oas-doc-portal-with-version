import React, {Component} from 'react';
import './App.css'
// import Switch from "react-switch";
import '../node_modules/swagger-ui/dist/swagger-ui.css'
// import Navbar from './Navbar.js'
import {BrowserRouter as Router, Route} from "react-router-dom";
import styled from "styled-components";
// import Sidebar from './Sidebar.js';

import Folder from './Folder.js';
import GlobalStyles from './styles/GlobalStyles';
import Navbar from "./Navbar";

const StyledTree = styled.div`
    line-height: 1.8;
  `;



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      //checked: false,
      // definitionLink: "https://petstore3.swagger.io/api/v3/openapi.json"
       //definitionLink: window.location.pathname.replace("/packages", "http://localhost:3000/")
       definitionLink : window.location.pathname
    }
    //this.handleChange = this.handleChange.bind(this);
    this.updateDefinitionLink = this.updateDefinitionLink.bind(this)
  }

  updateDefinitionLink(newLink) {
    this.setState({
      //definitionLink : newLink
      definitionLink: newLink
      //definitionLink: newLink.replace (/^/,"http://localhost:3000")
    })
  }

  handleChange(checked) {
    this.setState({checked});
  }


  render() {
    return (
      <div className="App">

        <StyledTree>
				<div className="side-bar" >
        <Router>
          <Route
            path="/"
            render={({history, location, match}) => (
              <Folder
                updateDefinitionLink={this.updateDefinitionLink}
                depth={0}
                history={history}
                match={match}
                location={location}
                name="Myntra"
                path="/Myntra"
              />
            )}
          />
        </Router>
        </div>
        </StyledTree>

        <div className = "menu" >
          <div className = "heading">
            <Navbar path = {this.state.definitionLink} />
          </div>
        </div>
      </div>

    );
  }
}

export default App;