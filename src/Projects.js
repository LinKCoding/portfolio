import React from 'react'
import ProjectList from './projects/ProjectList'
import Scite from './projects/Scite'
import ReFind from './projects/ReFind'
import Kofetcher from './projects/Kofetcher'
import ImdbClone from './projects/ImdbClone'

import { Grid } from 'semantic-ui-react'

class Projects extends React.Component {

  render(){
    return(
      <Grid.Row>
        <ProjectList />
        <Grid columns={4}>
          <Scite />
          <ReFind />
          <Kofetcher />
          <ImdbClone />
        </Grid>
      </Grid.Row>
    )
  }
}

export default Projects
