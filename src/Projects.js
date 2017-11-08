import React from 'react'
import Scite from './projects/Scite'
import Recipe from './projects/Recipe'
import Kofetcher from './projects/Kofetcher'
import ImdbClone from './projects/ImdbClone'

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
