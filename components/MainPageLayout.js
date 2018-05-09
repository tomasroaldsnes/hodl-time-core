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


import Actions from 'grommet/components/icons/base/Actions';
import Down from 'grommet/components/icons/base/Down';
import DocumentTextIcon from 'grommet/components/icons/base/DocumentText';


import space1 from './assets/space1.jpg';
import space2 from './assets/space2.jpg';
import space3 from './assets/space3.jpg';
import space5 from './assets/space5.jpg';
import space6 from './assets/space6.jpg';
import metamask from './assets/metamask.png';


export default class MainPageLayout extends Component{
    state = {
        isLoading: false
    }

    readWhitepaper = () => {
        this.setState({isLoading: true});
        Router.pushRoute('/whitepaper');
    }


    render(){
    return(
        <div>
            
           
           
            <Article>

                
                
                <Box justify="center" align="center" full={true}
                pad="large" colorIndex="grey-2" texture={space1}>

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
                            <Anchor href='/app/app'
                                className='active'>
                                Go to app
                            </Anchor>
                            <Anchor href='/whitepaper'>
                                Whitepaper
                            </Anchor>
                            <Anchor href='#'>
                                Third
                            </Anchor>
                            </Menu>
                        </Box>
                    </Header>
                        

                    <Headline size='large' align='center' strong={true}>
                    H O D L T I M E
                    </Headline>
                    <Headline size='small' align='center' strong={false}>
                    Earn money by saving better.
                    </Headline>

                    <Button label='Go to App'
                    align='center'
                    href='/app/app'
                    loading={this.state.isLoading}
                    primary={false}
                    secondary={false}
                    accent={false} />

                    <Footer float={true} alignContent>
                        <Box flex={true}
                            justify='center'
                            direction='row'
                            responsive={false}>
                            <Down/>
                        </Box>
                    </Footer>

                </Box>

                <Box justify="center" align="center" full={true}
                pad="large" colorIndex="grey-2" texture={space3}>
                <Section>

                <Heading margin='none' tag='h2' align='center' strong={true}>
                    What is H O D L T I M E ?
                </Heading>

                <Paragraph size='large' align='center'>
                    HT is a multiplayer saving game on the Ethereum blockchain.
                    Everyone gets a timelocked savings account. If someone withdraws funds early, they pay a 5% fee. 
                    This fee goes to the Weakhand-fund. Whenever you make a deposit to your savings account, 
                    you get a reward from the Weakhand-fund.
                     

                </Paragraph>

                


                </Section>
                <Button icon={<DocumentTextIcon />}
                    label='Read the Whitepaper'
                    onClick={this.readWhitepaper}
                    align='center'
                    href='/whitepaper'
                    loading={this.state.isLoading}
                    primary={false}
                    secondary={false}
                    accent={false} />
                </Box>

                <Box justify="center" align="center" full={true}
                pad="large" colorIndex="grey-2" texture={space6}>

                <Heading margin='medium' tag='h2' align='center' strong={true}>
                    What do I need?
                </Heading>

                

                <Image src={metamask} size='small' />

                <Paragraph size='large' align='center'>
                You need a MetaMask account with some amount of ether. Get it at metamask.io
                     

                </Paragraph>

                 </Box>
                
                
                </Article>
            
        </div>    
        
    );
    } //render
};