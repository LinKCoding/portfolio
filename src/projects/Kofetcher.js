import React from 'react'
import { Grid, Image, Segment, Divider } from 'semantic-ui-react'

class Kofetcher extends React.Component {
  render(){
    return(
      <Grid.Column width={4}>
        <Segment className="project">
          <Image src='kofetcher-thumbnail.png'/>
          <Divider horizontal inverted className="Header"> Kofetcher </Divider>
          <p className="Description">
            Ruby and Ruby on Rails project
          </p>
        </Segment>
      </Grid.Column>
    )
  }
}

export default Kofetcher
