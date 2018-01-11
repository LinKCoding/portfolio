import React from 'react'
import AllProjects from './AllProjects'
import { Grid, Image, Segment, Divider } from 'semantic-ui-react'

class ProjectList extends React.Component {
  //still need to create a generic project Component
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

export default ProjectList
