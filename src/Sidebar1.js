import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineFile, AiOutlineFolder} from "react-icons/ai";
import { DiJavascript1, DiCss3Full, DiHtml5, DiReact } from "react-icons/di";

const Sidebar1 = props => {
  
  console.log(props);

  const FILE_ICONS = {
    js: <DiJavascript1 />,
    css: <DiCss3Full />,
    html: <DiHtml5 />,
    jsx: <DiReact />
  };

  const StyledTree = styled.div`
    line-height: 1.8;
  `;
  const StyledFile = styled.div`
    padding-left: 20px;
    display: flex;
    align-items: center;
    span {
      margin-left: 5px;
    }
  `;
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

  const File = ({name,paths}) => {

    //console.log(props);
    //console.log(paths);
    let ext = name.split(".")[1];

    const clickMe = () => {
      // alert(paths);
      props.updateDefinitionLink(paths);
      // <App1 paths = {paths}/>
    };

    return (

      <StyledFile>
        {/* render the extension or fallback to generic file icon  */}
      {/* <div className = "select--action" onClick = {}> */}
        {FILE_ICONS[ext] || <AiOutlineFile />}
        <span>

          {/* <i
          onClick={() => props.clickHander(id)}
          ></i>     */}
      
          <div onClick={clickMe} > 
            {name}
          </div>
          
          </span>

        {/* </div> */}
      </StyledFile>
    );
  };

  const Folder = ({ name, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = e => {
      e.preventDefault();
      setIsOpen(!isOpen);
    };

    return (
      <StyledFolder>
        <div className="folder--label" onClick={handleToggle}>
          <AiOutlineFolder />
          <span>{name}</span>
        </div>
        <Collapsible isOpen={isOpen}>{children}</Collapsible>
      </StyledFolder>
    );
  };

  const TreeRecursive = ({ data }) => {
    // loop through the data
    return data.map(item => {
      // if its a file render <File />
      if (item.IsDir === false) {
        return <File name={item.name} paths = {item.paths}/>;
      }


      // if its a folder render <Folder />
      if (item.IsDir === true) {
        return (
          <Folder name={item.name}>
            {/* Call the <TreeRecursive /> component with the current item.childrens */}
            <TreeRecursive data={item.childrens} />
          </Folder>
        );
      }
    });
  };
  const Tree = ({ data, children }) => {
    const isImparative = data && !children;

    return (
      <StyledTree>
        {isImparative ? <TreeRecursive data={data} /> : children}
      </StyledTree>
    );
  };

  Tree.File = File;
  Tree.Folder = Folder;


const structure = [require('./structure_file.json')];   

  return (
    <div className="side-bar">

      <Tree data={structure} />

    </div>
  );

}
export default Sidebar1;
  
