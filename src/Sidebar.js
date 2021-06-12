import React, { Component } from "react";
import File from "./File";
import Folder from "./Folder";
//structure = require("./structure_file.json");
import styled from "styled-components";
import { AiOutlineFile, AiOutlineFolder} from "react-icons/ai";
import { DiJavascript1, DiCss3Full, DiHtml5, DiReact } from "react-icons/di";


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
		console.log(this.structure);
		debugger;

        // const StyledTree = styled.div`
        // line-height: 1.8;
        // `;


		return (
			<>
                <StyledTree>
				<div className="side-bar" >

					{this.structure.IsDir === true ? (
						<Folder
							{...this.structure}
							update={updateDefinitionLink}
						/>
					) : (
						<File
							{...this.structure}
							update={updateDefinitionLink}
						/>
					)}
				</div>
                </StyledTree>
			</>
		);
	}
}

export default Sidebar;
