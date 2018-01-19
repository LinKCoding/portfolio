import React from 'react'
import AllProjects from './AllProjects'
import ProjectDetail from './ProjectDetail'
import { Grid } from 'semantic-ui-react'

class ProjectList extends React.Component {
  render(){
    return(
      <Grid columns={3} stackable>
        {AllProjects.map(project => {
          return <ProjectDetail project={project} />
        })}
      </Grid>
    )
  }
}

export default ProjectList
