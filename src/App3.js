import React,{Component} from 'react';
import { RedocStandalone } from 'redoc';

const App3 = (props) => {

    console.log('hey whatsapp ')
    console.log(props);
    console.log(props.val);

    return (

        <div id = "try" >
        
        Child value 1 is <span>{props.value}</span>

        {/* <RedocStandalone specUrl= {props.value} 
            options={{
                nativeScrollbars: false,
                theme: { colors: { primary: { main: '#dd5522' } } },
                // scroll-behavior: smooth
            }}
            
        /> */}

        </div>

    );


}

export default App3;