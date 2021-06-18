import React, {Component} from "react";
import styled from "styled-components";


import PropTypes from "prop-types";
import {FcRight} from "react-icons/fc"


const StyledFile = styled.div`
    padding-left: 20px;
    display: flex;
    align-items: center;
    span {
      margin-left: 5px;
      cursor : pointer;
    }
  `;

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


class File extends Component {

  onFileClick = () => {
    const {path, history} = this.props;
    // update(path);

    this.props.updateDefinitionLink(path)

    return history.push(path);

  };

  render() {
    const {name, depth} = this.props;
    
    
    return (
      <StyledFile depth={depth} onClick={this.onFileClick}>
        <FcRight/><span>{name}</span>
      </StyledFile>
    );
  }
}

File.propTypes = propTypes;

export default File;
