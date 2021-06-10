import React,{Component} from 'react';
//import { RedocStandalone } from 'redoc';
import { RedocStandalone } from 'redoc';
// import SwaggerUI from 'swagger-ui';
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"



export default class App2 extends Component{
    constructor(props){
        super(props);
    }
    render() {

        return (
        
            <div id = "api-data-swagger" >
            {/* Child value 1 is <span>{this.props.value}</span> */}
            <SwaggerUI url= {this.props.value} />

            </div>
        );
    }
}

// export default App1;