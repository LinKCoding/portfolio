import React from 'react'
import ProjectModal from './ProjectModal'
import { Grid, Image, Segment, Divider } from 'semantic-ui-react'

class ProjectDetail extends React.Component {
  render(){
    const {project} = this.props
    return(
      <Grid.Column width={5}>
        <Segment className="project">
          <Image src={project.image}/>
          <Divider horizontal inverted className="Header"> {project.title} </Divider>
          <ProjectModal project={project}/>
        </Segment>
      </Grid.Column>
    )
  }
}

export default ProjectDetail
