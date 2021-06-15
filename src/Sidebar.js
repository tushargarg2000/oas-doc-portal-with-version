import React, { Component } from "react";
import File from "./File";
import Folder from "./Folder";
//structure = require("./structure_file.json");
import styled from "styled-components";
import { AiOutlineFile, AiOutlineFolder} from "react-icons/ai";
import { DiJavascript1, DiCss3Full, DiHtml5, DiReact } from "react-icons/di";

import PropTypes from "prop-types";


import { BrowserRouter as Router, Route } from "react-router-dom";


const StyledTree = styled.div`
    line-height: 1.8;
  `;

class Sidebar extends Component {
	
	structure = require("./structure_file.json");

	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {}

	render() {

		const { updateDefinitionLink } = this.props;
		return (
			<>
                <StyledTree>
				<div className="side-bar" >
						{/* <Router>
							<Route
							path="/"
							render={({ history, location, match }) => (
								<Folder
								depth={0}
								history={history}
								match={match}
								location={location}
								name = "storefront-display"
								path = "public/storefront-display"
								/>
							)}
							/>
						</Router> */}
				</div>
                </StyledTree>
			</>
		);
	}
}

export default Sidebar;
