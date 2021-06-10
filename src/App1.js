import React,{Component} from 'react';
import { RedocStandalone } from 'redoc';

export default class App1 extends Component{
    constructor(props){
        super(props);
    }
    render() {

        return (
        
            <div id = "api-data-redoc" >
            <RedocStandalone specUrl= {this.props.value} 
            options={{
                nativeScrollbars: false,
                theme: { colors: { primary: { main: '#dd5522' } } },
                // scroll-behavior: smooth
            }}
            
            />

            </div>

            // <RedocStandalone
            //     specUrl= 'http://petstore.swagger.io/v2/swagger.json'
            //     options={{
            //         nativeScrollbars: true,
            //         theme: { colors: { primary: { main: '#dd5522' } } },
            //         scrollYOffset : 30
            //       }}
            // />
        
        // <div className = "App1">
        //     Child value 1 is <span>{this.props.value}</span>
        //     <redoc spec-url='http://petstore.swagger.io/v2/swagger.json'></redoc>  
        // </div>
        );
    }
}

// export default App1;