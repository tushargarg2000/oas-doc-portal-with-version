import React, {Component} from 'react';
import './App.css'
// import Switch from "react-switch";
import '../node_modules/swagger-ui/dist/swagger-ui.css'
// import Navbar from './Navbar.js'
import {BrowserRouter as Router, Route} from "react-router-dom";

// import Sidebar from './Sidebar.js';

import Folder from './Folder.js';
import GlobalStyles from './styles/GlobalStyles';
import Navbar from "./Navbar";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      //checked: false,
      // definitionLink: "https://petstore3.swagger.io/api/v3/openapi.json"
      definitionLink: window.location.pathname.replace("/public", "http://localhost:3000/")
    }
    //this.handleChange = this.handleChange.bind(this);
    this.updateDefinitionLink = this.updateDefinitionLink.bind(this)
  }

  updateDefinitionLink(newLink) {
    this.setState({
      definitionLink: newLink.replace("/public", "http://localhost:3000/")
    })
  }

  handleChange(checked) {
    this.setState({checked});
  }


  render() {
    return (
      <div className="App">
        <GlobalStyles/>
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
                name="public"
                path="/public"
              />
            )}
          />
        </Router>

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