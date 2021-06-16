import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";
import './Folder.css';
import FolderContent from "./FolderContent";
import {Route} from "react-router-dom";
import styled from "styled-components";

import { FcOpenedFolder,FcFolder } from "react-icons/fc"
import { AiOutlineFile, AiOutlineFolder} from "react-icons/ai";

import { StyledButton } from "./styles/GlobalStyles";

const StyledFolder = styled.div`
padding-left: 20px;

.folder--label {
  display: flex;
  align-items: center;
  span {
	margin-left: 5px;
  cursor : pointer;
  }
}
span{
  cursor : pointer;
}
`;


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


class Folder extends Component {

  onOpenFolder = () => {

    const {path, history, match, location} = this.props;
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
      location: {pathname},
      depth,
    } = this.props;

    const isOpen = pathname.includes(path);
    //const isOpen = pathname.includes(path);
    return (
      <Fragment>
		  <StyledFolder>
        <div onClick={this.onOpenFolder} depth={depth}>
          {isOpen ? (
			  <FcOpenedFolder />
          ) : (
			  <FcFolder />
          )}{" "}
		  {/* <AiOutlineFolder /> */}
          <span>{name}</span>
        </div>

        <Route
          path={`${path}`}
          render={({history, match, location}) => (
            <FolderContent
              updateDefinitionLink={this.props.updateDefinitionLink}
              depth={depth}
              history={history}
              match={match}
              location={location}
              name={name}
              path={path}
            />
          )}
        />
		</StyledFolder>

      </Fragment>
    );
  }
}

Folder.propTypes = propTypes;

export default Folder;
