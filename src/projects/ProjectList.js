import React from 'react'
import AllProjects from './AllProjects'
import ProjectDetail from './ProjectDetail'
import { Grid, Image, Segment, Divider } from 'semantic-ui-react'

class ProjectList extends React.Component {
  //still need to create a generic project Component
  render(){
    console.log(AllProjects);
    return(
      <Grid.Column columns={4}>
        {AllProjects.map(project => {
          return <ProjectDetail project={project} />
        })}

      </Grid.Column>
    )
  }
}

export default ProjectList
