import React from 'react'
import ProjectList from './projects/ProjectList'

import { Grid } from 'semantic-ui-react'

class Projects extends React.Component {

  render(){
    return(
      <Grid.Row>
        <ProjectList />
      </Grid.Row>
    )
  }
}

export default Projects
