import React, {Component} from 'react';
import AppLayout from '../../components/AppLayout';
import Head from 'next/head';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';
import Header from 'grommet/components/Header';
import Columns from 'grommet/components/Columns';
import AnnotatedMeter from 'grommet-addons/components/AnnotatedMeter';
import Meter from 'grommet/components/Meter';
import Label from 'grommet/components/Label';
import Value from 'grommet/components/Value';
import Heading from 'grommet/components/Heading';
import Card from 'grommet/components/Card';

import Button from 'grommet/components/Button'

import AddIcon from 'grommet/components/icons/base/Add';

import Chart, {Axis, Area, Marker, MarkerLabel, Line, HotSpots, Base, Layers} from 'grommet/components/chart/Chart';


import purpleDark from '../../components/assets/purpleDark.jpg';
import dark from '../../components/assets/dark.jpg';
import purpleBox from '../../components/assets/purpleBox.jpg';

const backgrounColor = 'neutral-3';
const backgrounColorSide = 'neutral-3';

const texture = purpleDark;
const textureSide = purpleDark;

class HodlAppDeposit extends Component{
    state = {
        depositLock: false,
        isLoading: false
    }
    
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

                <AppLayout>
                <Box justify='start'
                         align='strech'
                         pad='none'
                         texture={texture}
                         direction='row'
                         full={true}>

                        

                        <Box justify='start'
                         align='stretch'
                         pad='medium'
                         direction='column'
                         colorIndex={backgrounColor}
                         texture={texture}>

                        <Card label='Overview'
                            heading='Make a deposit'/>


                        <Box justify='start'
                         align='center'
                         pad='none'
                         basis='small'
                         size='large'
                         texture={texture}
                         full={false}
                         colorIndex={backgrounColor}
                         direction='row'>

                            <Card label='WeakHand Fund' textSize='small'
                                heading={<Label size='small'>0.34 ETH</Label>}/>

                            <Card textSize='small' label='Your share of fund'
                            heading={<Label size='small'>0.000023 ETH</Label>}/>

                            

                            

                         </Box>

                        <Box justify='start'
                         align='center'
                         pad='none'
                         basis='small'
                         size='large'
                         texture={texture}
                         full={false}
                         colorIndex={backgrounColor}
                         direction='row'> 

                        <Button icon={<AddIcon />}
                            label='New Deposit'
                            onClick={this.readWhitepaper}
                            align='center'
                            href='/whitepaper'
                            loading={this.state.isLoading}
                            disabled={this.state.depositLock}
                            primary={false}
                            secondary={false}
                            accent={false} />

                        </Box>
                        
                    </Box>  

                            
                        
                   
                 </Box>

                </AppLayout>
               
                 
            </div>    
        )
    }

}

export default HodlAppDeposit;