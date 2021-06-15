/**
 *
 * FolderContent
 *
 */

 import React from "react";
 import PropTypes from "prop-types";
 
 import File from "./File";
 import Folder from "./Folder";

 import { getFolderContent } from "./utils";


 const propTypes = {
   /** Name of folder */
   name: PropTypes.string.isRequired,
   /** Path of folder */
   path: PropTypes.string.isRequired,
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
 
 const defaultProps = {
   content: [],
 };
 
 class FolderContent extends React.Component {
   state = { loading: false, error: null, content: [] };
 

    async componentDidMount() {
     
     const { path } = this.props;
     console.log('we are in the folder content Folder checking if path has reached or not',path);
     let content = JSON.parse(localStorage.getItem(path));
     console.log('the content we have initally is ',content);
     try {
       this.setState({ loading: true });
       if (!content) {
         content = getFolderContent(path);
         
         localStorage.setItem(path, JSON.stringify(content));
       }
       this.setState({ content, loading: false });
     }
      catch (error) {
       console.warn("Error: ", error);
       this.setState({ error, loading: false });
     }
     console.log('Content that is being called is ',content);
   }
 
   render() {
     const { error, content, loading } = this.state;
     const { name, depth, history, location, match } = this.props;
     /* Show error if broken */

    console.log('content in FolderContent is ',content);

     if (error) {
       return (
         <p style={{ fontWeight: "bold", color: "red" }}>
           Oops! Could not fetch folder contents for {name}
         </p>
       );
     }
     /* Show loading animation */
     if (loading) {
       return <p>Loading...</p>;
     }
 
     /* Render all folder content (subfolders and files)*/
     return content.map(foldOrFile => {
       if (foldOrFile.type === "folder") {
         return (
           <div key={foldOrFile.name}>
             <Folder
               depth={depth + 1}
               {...foldOrFile}
               history={history}
               location={location}
               match={match}
             />
           </div>
         );
       }
       return (
         <div key={foldOrFile.name}>
           <File depth={depth + 1} {...foldOrFile} history={history} />
         </div>
       );
     });
   }
 }
 
 FolderContent.defaultProps = defaultProps;
 FolderContent.propTypes = propTypes;
 
 export default FolderContent;
 