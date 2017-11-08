import React from 'react'
import Scite from './Scite'
import Recipe from './Recipe'
import Kofetcher from './Kofetcher'
import ImdbClone from './ImdbClone'

import { Grid } from 'semantic-ui-react'

class Projects extends React.Component {
  render(){
    return(
      <Grid.Row>
        <Grid columns={4}>
          <Scite />
          <Recipe />
          <Kofetcher />
          <ImdbClone />
        </Grid>
      </Grid.Row>
    )
  }
}

export default Projects
