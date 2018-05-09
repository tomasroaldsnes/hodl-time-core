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


import Chart, {Axis, Area, Marker, MarkerLabel, Line, HotSpots, Base, Layers} from 'grommet/components/chart/Chart';


import purpleDark from '../../components/assets/purpleDark.jpg';
import dark from '../../components/assets/dark.jpg';
import purpleBox from '../../components/assets/purpleBox.jpg';

const backgrounColor = 'neutral-3';
const backgrounColorSide = 'neutral-3';

const texture = purpleDark;
const textureSide = purpleBox;

class HodlApp extends Component{
    
    
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
                            heading='Your Account'/>


                        <Box justify='start'
                         align='center'
                         pad='none'
                         basis='small'
                         size='large'
                         texture={texture}
                         full={false}
                         colorIndex={backgrounColor}
                         direction='row'>

                            <Card label='Address' textSize='small'
                                heading={<Label size='small'>0x723492183483129123</Label>}/>

                            <Card textSize='small' label='Last deposit'
                            heading={<Label size='small'>15th of June 2018</Label>}/>

                            <Card textSize='small' label='Last'
                            heading={<Label size='small'>15th of June 2018</Label>}/>

                            

                         </Box>

                        

                        <Box justify='stretch'
                         align='start'
                         pad='small'
                         texture={texture}
                         colorIndex={backgrounColor}
                         direction='row'>

                        <Box alignSelf='start'
                            pad='small'
                            align='center'
                            justify='end'
                            basis='small'
                            margin='small'
                            texture={texture}
                            colorIndex={backgrounColor}>
                            
                            <Meter type='circle'
                            label={<Value value={40}
                            units='ETH' />}
                            size='small'
                            colorIndex='graph-2'
                            value={40}/>
                            <Heading tag='h5' align='center'>
                                Saved
                            </Heading>  
                               
                        </Box>

                        <Box alignSelf='start'
                            pad='small'
                            align='center'
                            justify='end'
                            basis='small'
                            margin='small'
                            colorIndex={backgrounColor}
                            texture={texture}>
                            
                            <Meter type='circle'
                            label={<Value value={40}
                            units='ETH' />}
                            colorIndex='graph-2'
                            size='small'
                            value={40}/>
                            <Heading tag='h5' align='center'>
                                Saved
                            </Heading>  
                               
                        </Box>

                         <Box alignSelf='start'
                            pad='small'
                            align='center'
                            justify='end'
                            basis='small'
                            margin='small'
                            texture={texture}
                            colorIndex={backgrounColor}>
                            
                            <Meter type='circle'
                            label={<Value value={40}
                            units='ETH' />}
                            colorIndex='graph-2'
                            size='small'
                            value={40}/>
                            <Heading tag='h5' align='center'>
                                Saved
                            </Heading>  
                               
                        </Box>
                        </Box>
                    </Box>  

                     <Box justify='start'
                         align='stretch'
                         pad='none'
                         basis='end'
                         direction='column'
                         texture={textureSide}
                         colorIndex='grey-1'>

                         <Box alignSelf='center'
                            pad='large'
                            align='center'
                            justify='center'
                            basis='full'
                            direction='column'
                            colorIndex={backgrounColorSide}
                            texture={textureSide}>
                            <Value value={2} units='ETH'/>
                            <Heading tag='h5' align='center'>
                                in Weakhand-fund
                            </Heading>
                            
                            
                            </Box>

                            <Box alignSelf='start'
                            pad='large'
                            align='center'
                            justify='start'
                            basis='full'
                            direction='column'
                            colorIndex={backgrounColorSide}
                            texture={textureSide}>
                            <Value value={0.001} units='ETH'/>
                            <Heading tag='h5' align='center'>
                                Your share of fund
                            </Heading>
                            
                            
                            </Box>

                            <Box alignSelf='center'
                            pad='medium'
                            align='center'
                            justify='center'
                            direction='column'
                            basis='full'
                            flex={true}>
                            <Value value={13}/>
                            <Heading tag='h5' align='center'>
                                Your total deposits
                            </Heading>
                            
                            
                            
                            </Box>
                            

                         </Box>

                                          
                        
                    </Box>

                </AppLayout>
               
                 
            </div>    
        )
    }

}

export default HodlApp;