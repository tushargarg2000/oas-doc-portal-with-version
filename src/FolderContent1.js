

 import React from "react";
 import PropTypes from "prop-types";
 
 import File from "./File";
 import Folder from "./Folder";

 import { getFolderContent } from "./utils";


 class FolderContent1 extends React.Component{

    render(){

        console.log('this is folderContent1');
    
        return (
            <div>
                FolderContent1
            </div>
            
        );

    }
 }

 export default FolderContent1;