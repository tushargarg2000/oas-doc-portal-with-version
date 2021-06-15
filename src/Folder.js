import React, { Component } from "react";
import File from "./File";
import './Folder.css';
import styled from "styled-components";
import { AiOutlineFile, AiOutlineFolder} from "react-icons/ai";
import { DiJavascript1, DiCss3Full, DiHtml5, DiReact } from "react-icons/di";

import { getFolderContent } from "./utils";

import FolderContent from "./FolderContent";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route } from "react-router-dom";

const StyledFolder = styled.div`
padding-left: 20px;

.folder--label {
  display: flex;
  align-items: center;
  span {
	margin-left: 5px;
  }
}
`;

const Collapsible = styled.div`
    height: ${p => (p.isOpen ? "auto" : "0")};
    overflow: hidden;
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
	constructor(props) {
		super(props);
		this.state = {
			isopen: false,
		};
	}

	// openup = () => {
	// 	const { isopen } = this.state;

	// 	this.setState({
	// 		isopen: !isopen,
	// 	});
	// };

	onOpenFolder = () => {

		const { path, history, match, location } = this.props;

		console.log('Hii welcome ',this.props);
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
		//const { name, path, childrens, update } = this.props;
		//const { isopen } = this.state;

		const isOpen = pathname.includes(path);
		
		return (
			<>
				<StyledFolder>
				
				<div onClick={this.onOpenFolder} depth={depth}>
				<AiOutlineFolder />
          		<span>blah balha blah{ name }</span>
				</div>
				
				{/* {isopen &&
					children.map((value, index) => {
						
						return value.IsDir === true ? (
							<Folder {...value} update={update} />
						) : (
							<File {...value} update={update} />
						);
					})} */}

				{isOpen ? (
					<i className="fas fa-folder-open medium-yellow fa-lg" />
				) : (
					<i className="fas fa-folder medium-yellow fa-lg" />
				)}{" "}
          		{name}

				</StyledFolder>
				
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


			</>
		);
	}
}

export default Folder;
