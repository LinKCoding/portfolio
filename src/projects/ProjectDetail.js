import React from 'react'
import ProjectModal from './ProjectModal'
import { Grid, Image, Segment, Divider } from 'semantic-ui-react'

class ProjectDetail extends React.Component {
  render(){
    return(
      <Grid.Column width={4}>
        <Segment className="project">
          <Image src='imdbClone-thumbnail.png'/>
          <Divider horizontal inverted className="Header"> IMDB Clone </Divider>
          <ProjectModal />
        </Segment>
      </Grid.Column>
    )
  }
}

export default ProjectDetail
