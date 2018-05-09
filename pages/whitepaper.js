import React, {Component} from 'react';
import WhitepaperPage from '../components/WhitepaperPage';
import Head from 'next/head';

class Whitepaper extends Component{
    
    
    render(){
        return (
            <div>
                <Head>
                <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
                <link rel="icon" href="https://freeiconshop.com/wp-content/uploads/edd/heart-flat.png" />
                
                <link href="//cdnjs.cloudflare.com/ajax/libs/grommet/1.10.1/grommet.min.css" rel="stylesheet" type="text/css" />
                
                <meta charset="utf-8"/>
                <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet"/>
                <title>HODLtime! - Make money while saving.</title>
                
                <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimal-ui"/>

                <meta name="mobile-web-app-capable" content="yes"/>

                <meta name="apple-mobile-web-app-capable" content="yes"/>

                <meta name="format-detection" content="telephone=no"/>

                <meta name="theme-color" content="#673AB8"/>

                </Head>

                <WhitepaperPage/>
               
                 
            </div>    
        )
    }

}

export default Whitepaper;