/**
 *
 * Folder
 *
 */

import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import { StyledButton } from "../../styles/GlobalStyles";

import FolderContent from "../FolderContent";

const propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  /** React router history to forward down to files/folders */
  history: PropTypes.shape({
    push: PropTypes.func,
    action: PropTypes.string,
    block: PropTypes.func,
    createHref: PropTypes.func,
    go: PropTypes.func,
    goBack: PropTypes.func,
    goForward: PropTypes.func,
    length: PropTypes.number,
    replace: PropTypes.func,
  }).isRequired,
  match: PropTypes.shape({
    url: PropTypes.string,
    path: PropTypes.string,
    params: PropTypes.object,
    isExact: PropTypes.bool,
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string,
    hash: PropTypes.string,
    state: PropTypes.object,
    search: PropTypes.string,
  }),
};

class Folder extends React.Component {
  
  onOpenFolder = () => {
    const { path, history, match, location } = this.props;
    // If location pathname (URL) matches match.url (arent routes path) are the same: OPEN DIRECTORY
    if (location.pathname === match.url) return history.push(path);
    // when a sibling folder is open and a folder is clicked, go to this new path
    if (!location.pathname.includes(path)) return history.push(path);
    // Closing folder (going back up to parent url/path)
    return history.push(match.url);
  };

  render() {
    const {
      path,
      name,
      location: { pathname },
      depth,
    } = this.props;
    // Folder is open if the pathname(in url) includes the the current folder's path:
    const isOpen = pathname.includes(path);
    return (
      <Fragment>
        <StyledButton onClick={this.onOpenFolder} depth={depth}>
          {isOpen ? (
            <i className="fas fa-folder-open medium-yellow fa-lg" />
          ) : (
            <i className="fas fa-folder medium-yellow fa-lg" />
          )}{" "}
          {name}
        </StyledButton>

        <Route
          path={`${path}`}
          render={({ history, match, location }) => (
            <FolderContent
              depth={depth}
              history={history}
              match={match}
              location={location}
              name={name}
              path={path}
            />
          )}
        />
      </Fragment>
    );
  }
}

Folder.propTypes = propTypes;

export default Folder;
