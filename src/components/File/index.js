/**
 *
 * File
 *
 */
import React from "react";
import PropTypes from "prop-types";
import {getClassWithColor} from "file-icons-js";
//import fileIcons from "file-icons-js";
import "file-icons-js/css/style.css";
import { StyledButton } from "../../styles/GlobalStyles";

const propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
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
};

class File extends React.Component {
  onFileClick = () => {
    const { path, history } = this.props;
    return history.push(path);
  };

  render() {
    
    //const iconClass = getClassWithColor(name);
    
    const { name, depth } = this.props;
    const iconClass = getClassWithColor(name);
    return (
      <StyledButton depth={depth} onClick={this.onFileClick}>
        <i className={iconClass} /> {name}
      </StyledButton>
    );
  }
}

File.propTypes = propTypes;

export default File;
