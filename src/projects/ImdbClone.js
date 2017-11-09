import React from 'react'
import ImdbCloneModal from './modals/ImdbCloneModal'
import { Grid, Image, Segment, Divider } from 'semantic-ui-react'

class ImdbClone extends React.Component {
  render(){
    return(
      <Grid.Column width={4}>
        <Segment className="project">
          <Image src='imdbClone-thumbnail.png'/>
          <Divider horizontal inverted className="Header"> IMDB Clone </Divider>
          <ImdbCloneModal />
        </Segment>
      </Grid.Column>
    )
  }
}

export default ImdbClone
