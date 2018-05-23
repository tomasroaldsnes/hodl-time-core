
import React, {Component} from 'react';
import Button from 'grommet/components/Button'
import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import Footer from 'grommet/components/Footer';
import Menu from 'grommet/components/Menu';
import Pulse from 'grommet/components/icons/Pulse';

import User from 'grommet/components/icons/base/User';
import HomeIcon from 'grommet/components/icons/base/Home';
import AddIcon from 'grommet/components/icons/base/Add';

import Split from 'grommet/components/Split';
import App from 'grommet/components/App';
import Head from 'next/head';
import space2 from './assets/space2.jpg';
import dark from './assets/dark.jpg';

export default (props) => {
   
   
        return(

            <div>
            
            
            <App>
            <Split flex='right'
            separator={false}>
               

                <Sidebar colorIndex='neutral-3' texture={dark} size='xsmall' full='true'>
                <Header pad='medium'
                    justify='center'>
                    <Title>
                    H O D L
                    </Title>
                </Header>
                <Box flex='grow'
                    justify='start'>
                    <Menu primary={true}>
                    <Anchor align='center' href='/app/app'
                        className='active'>
                        <HomeIcon /> 
                    </Anchor>
                    <Anchor align='center' href='/app/app-deposit'>
                        <AddIcon />
                    </Anchor>
                    <Anchor align='center' href='/app/app-user'>
                        <User />
                    </Anchor>
                    </Menu>
                </Box>
                <Footer pad='medium'>
                    
                </Footer>
                </Sidebar>
        
                {props.children}
                   
            </Split>
            </App>
            </div>
  );

  
}