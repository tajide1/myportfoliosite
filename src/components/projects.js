import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0};
    }

   toggleCategories() {
       if (this.state.activeTab === 0) {
        return (
            <div className="projects-grid">
             <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color:'#fff', height: '176px', background: 'url(http://www.spyrestudios.com/wp-content/uploads/React.js_logo.svg_.png) center / cover'}}>
                    Project #1
                </CardTitle>
                <CardText>
                    jhrrrrrrrrrrrrrrrrrrmfhjs
                </CardText>
                <CardActions border>
                    <Button colored>Github</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name='share'/>
                </CardMenu>
            </Card>
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color:'#fff', height: '176px', background: 'url(http://www.spyrestudios.com/wp-content/uploads/React.js_logo.svg_.png) center / cover'}}>
                    Project #2
                </CardTitle>
                <CardText>
                    jhrrrrrrrrrrrrrrrrrrmfhjs
                </CardText>
                <CardActions border>
                    <Button colored>Github</Button>
                    <Button colored>CodePen</Button>
                    <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name='share'/>
                </CardMenu>
            </Card>

            </div>
        )
       } else if (this.state.activeTab === 1) {
        return (
            <div>
                <h1>This is React</h1>
            </div>
        )

       } else if (this.state.activeTab === 2) {
        return (
            <div>
                <h1>This is React</h1>
            </div>
        )

       } else if (this.state.activeTab === 3) {
        return (
            <div>
                <h1>This is MongoDB</h1>
            </div>
        )

       }
   }
    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={ (tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>JavaScript</Tab>
                    <Tab>Java</Tab>
                    <Tab>NodeJS</Tab>
                    <Tab>MongoDB</Tab>
                    <Tab>Express</Tab>
                    <Tab>Python</Tab>
                    <Tab>HTML/CSS</Tab>
                </Tabs>
               
                    <Grid >
                        <Cell col={12}>
                            <div className="content">
                                {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
                    
               
            </div>
        )
    }
}

export default Project;