import React, {Component} from 'react';

import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Headline from 'grommet/components/Headline';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Image from 'grommet/components/Image';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import Menu from 'grommet/components/Menu';
import Footer from 'grommet/components/Footer';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Card from 'grommet/components/Card';
import Button from 'grommet/components/Button';

import space4 from './assets/space4.jpg';


import Actions from 'grommet/components/icons/base/Actions';
import Down from 'grommet/components/icons/base/Down';
import DocumentTextIcon from 'grommet/components/icons/base/DocumentText';

class Whitepaper extends Component{
    


    
    render(){
        return (
            <div>
                
                <Article>

                
                
                <Box justify="center" align="center" full={true}
                pad="large" colorIndex="grey-2" texture={space4}>

                    <Header float={true}>
                    <Title margin='small'>
                        H O D L T I M E
                        </Title>
                        <Box flex={true}
                            justify='end'
                            direction='row'
                            responsive={false}>
                            <Menu icon={<Actions />}
                            dropAlign={{"right": "right"}}>
                            <Anchor href='#'
                                className='active'>
                                First
                            </Anchor>
                            <Anchor href='#'>
                                Second
                            </Anchor>
                            <Anchor href='#'>
                                Third
                            </Anchor>
                            </Menu>
                        </Box>
                    </Header>
                        

                    <Headline size='large' align='center' strong={true}>
                    W H I T E P A P E R
                    </Headline>
                    <Headline size='small' align='center' strong={false}>
                    Learn how hodltime works.
                    </Headline>

                    <Footer float={true} alignContent>
                        <Box flex={true}
                            justify='center'
                            direction='row'
                            responsive={false}>
                            <Down/>
                        </Box>
                    </Footer>

                </Box>

                <Box justify="start" align="center" full={true}
                pad="large" colorIndex="light-2" >
                
                <Section>
                <Heading margin='none' tag='h2' align='start' strong={true}>
                    Summary
                </Heading>

                <Paragraph size='medium' align='start'>
                

                Hodltime.io is a decentralized application (dApp) for letting users
                save capital in a time-locked contract built on the Ethereum
                blockchain. Hodltime give users an alternative way for
                cold-storage of funds that are inaccessible within a certain timeframe. The need for
                inaccessible savings accounts originate from the three biggest issues with
                cryptocurrency saving; funds can easily be withdrawn from a savings account, high
                volatility can create panic selling and the user’s own temptation to day-trade through
                betting on increasingly risky altcoins/ICO’s for short-term gain.

                </Paragraph>

                

                <Paragraph>

                Hodltime.io and Cryptocorgi.io let the user store ETH on the blockchain that will be
                transferred back to them at a later date. The user can choose the timeframe for the
                contract, by selecting from pre-set timeframes stretching from 2 weeks to 1 year or a
                specific date (ex. Birthday). The funds will then be inaccessible to the user for the
                specified timeframe and will be transferred back to the user’s account on the agreed
                upon date. The user’s savings are now safe from the user’s own temptations and will
                return at a later date, likely worth more than of the time of transfer.

                </Paragraph>
                

                {/* </Box>


                <Box justify="start" align="center" full={true}
                pad="large" colorIndex="light-2" > */}

                
                <Heading margin='small' tag='h2' align='start' strong={true}>
                   Value
                </Heading>

                <Paragraph size='medium' align='start'>
                

                Hodltime.io is a decentralized application (dApp) for letting users
                save capital in a time-locked contract built on the Ethereum
                blockchain. Hodltime give users an alternative way for
                cold-storage of funds that are inaccessible within a certain timeframe. The need for
                inaccessible savings accounts originate from the three biggest issues with
                cryptocurrency saving; funds can easily be withdrawn from a savings account, high
                volatility can create panic selling and the user’s own temptation to day-trade through
                betting on increasingly risky altcoins/ICO’s for short-term gain.

                </Paragraph>

                

                <Paragraph>

                Hodltime.io and Cryptocorgi.io let the user store ETH on the blockchain that will be
                transferred back to them at a later date. The user can choose the timeframe for the
                contract, by selecting from pre-set timeframes stretching from 2 weeks to 1 year or a
                specific date (ex. Birthday). The funds will then be inaccessible to the user for the
                specified timeframe and will be transferred back to the user’s account on the agreed
                upon date. The user’s savings are now safe from the user’s own temptations and will
                return at a later date, likely worth more than of the time of transfer.

                </Paragraph>
                
                </Section>
                </Box>
                
                
                </Article>
            
        </div>  
               
                 
              
        )
    }

}

export default Whitepaper;