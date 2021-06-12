import React, { Component } from "react";

import styled from "styled-components";
import { AiOutlineFile, AiOutlineFolder} from "react-icons/ai";
import { DiJavascript1, DiCss3Full, DiHtml5, DiReact } from "react-icons/di";


const FILE_ICONS = {
    js: <DiJavascript1 />,
    css: <DiCss3Full />,
    html: <DiHtml5 />,
    jsx: <DiReact />
};

const StyledFile = styled.div`
    padding-left: 20px;
    display: flex;
    align-items: center;
    span {
      margin-left: 5px;
    }
  `;

class File extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {}

	render() {
		const { name, paths, update } = this.props;

		return (

			<StyledFile>
			 <div onClick={() => update(paths)}>
			 <AiOutlineFile />		 
			 {name}
		 	</div>
			 </StyledFile>
		
		);
	}
}

export default File;
