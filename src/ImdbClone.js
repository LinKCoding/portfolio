import React from 'react'
import { Grid, Image, Segment, Divider } from 'semantic-ui-react'

class ImdbClone extends React.Component {
  render(){
    return(
      <Grid.Column width={4}>
        <Segment className="project">
          <Image src='imdbClone-thumbnail.png'/>
          <Divider horizontal inverted className="Header"> IMDB Clone </Divider>
          <p className="Description">
            Ruby CLI application backend only
          </p>
        </Segment>
      </Grid.Column>
    )
  }
}

export default ImdbClone
