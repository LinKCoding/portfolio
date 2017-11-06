import React, { Component } from 'react';
import Bio from './Bio'
import Projects from './Projects'
import './App.css';
import { Grid, Image } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <Grid className="App">
        <Grid.Column>
          <Grid.Row>
            <Grid>
            <Grid.Column width={8}>
              <Image src ="profile.jpg" />
            </Grid.Column>
            <Bio />
            </Grid>
          </Grid.Row>
          <Grid.Row>
            <Projects />
          </Grid.Row>
        </Grid.Column>
      </Grid>
    );
  }
}

export default App;
