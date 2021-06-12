import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Folder from "./components/Folder";

class Sidebar2 extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyles />
        <header className="App-header">File Tree Viewer</header>
        <div className="App">
          <Router>
            <Route
              path="/"
              render={({ history, location, match }) => (
                <Folder
                  depth={0}
                  history={history}
                  match={match}
                  location={location}
                  name="my-laptop"
                  path="/my-laptop"
                />
              )}
            />
          </Router>
        </div>
      </React.Fragment>
    );
  }
}

export default Sidebar2;
