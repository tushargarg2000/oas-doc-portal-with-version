import React, {Component} from "react";

import styled from "styled-components";
import {AiOutlineFile, AiOutlineFolder} from "react-icons/ai";
import {DiJavascript1, DiCss3Full, DiHtml5, DiReact} from "react-icons/di";

import {getClassWithColor} from "file-icons-js";

import FolderContent from "./FolderContent";
import PropTypes from "prop-types";
import {BrowserRouter as Router, Route} from "react-router-dom";

import {StyledButton} from "./styles/GlobalStyles";

import {getFolderContent} from "./utils";
import {update} from "lodash";

const FILE_ICONS = {
  js: <DiJavascript1/>,
  css: <DiCss3Full/>,
  html: <DiHtml5/>,
  jsx: <DiReact/>
};

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
    const iconClass = getClassWithColor(name);
    // const iconClass = getClassWithColor(name);
    return (
      <StyledFile depth={depth} onClick={this.onFileClick}>
        <i className={iconClass}/><span>{name}</span>
      </StyledFile>
    );
  }
}

File.propTypes = propTypes;

export default File;
