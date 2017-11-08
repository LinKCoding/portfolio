import React, { Component } from 'react';
import Bio from './Bio'
import Projects from './Projects'
import Languages from './Languages'
import Icons from './Icons'
import { Grid, Image, Segment, Divider } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <Segment id="wrapper" inverted style={{height:"90vh"}}>
        <Grid className="App">
          <Grid.Column className="Picture-Icons" width={3}>
            <Grid.Row className="Picture">
              <Segment>
                <Image src ="profile.jpg" />
              </Segment>
            </Grid.Row>
            <Divider fitted />
            <Grid.Row>
              <Bio />
            </Grid.Row>
            <Divider fitted />
            <Grid.Row>
              <Icons />
            </Grid.Row>
          </Grid.Column>
          <Grid.Column className="Name-Languages-Projects" width={13}>
            <Grid.Row>
              <h1> Kenny Lin</h1>
            </Grid.Row>
            <Grid.Row>
              <Languages />
            </Grid.Row>
            <Grid.Row>
              <Projects />
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

export default App;
