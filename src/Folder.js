import React, { Component } from "react";
import File from "./File";
import './Folder.css';
import styled from "styled-components";
import { AiOutlineFile, AiOutlineFolder} from "react-icons/ai";
import { DiJavascript1, DiCss3Full, DiHtml5, DiReact } from "react-icons/di";

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

class Folder extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isopen: false,
		};
	}

	openup = () => {
		const { isopen } = this.state;

		this.setState({
			isopen: !isopen,
		});
	};

	componentDidMount() {}

	render() {

		const { name, paths, childrens, update } = this.props;
		const { isopen } = this.state;

		return (
			<>
				<StyledFolder>
				
				<div onClick={this.openup}>
				<AiOutlineFolder />
          		<span>{ name}</span>
				</div>
				
				{isopen &&
					childrens.map((value, index) => {
						
						return value.IsDir === true ? (
							<Folder {...value} update={update} />
						) : (
							<File {...value} update={update} />
						);
					})}
				</StyledFolder>
			</>
		);
	}
}

export default Folder;
