import React from 'react'
import { Grid, Icon } from 'semantic-ui-react'

const Icons = () => {
  return(
    <Grid centered columns={5}>
      <Grid.Column>
        <Icon inverted name="file text outline" size='big'/>
      </Grid.Column>
      <Grid.Column>
        <Icon inverted name="github square" size='big'/>
      </Grid.Column>
      <Grid.Column>
        <Icon inverted name="linkedin square" size='big'/>
      </Grid.Column>
      <Grid.Column>
        <Icon inverted name="mail" size='big'/>
      </Grid.Column >
      <Grid.Column>
        <Icon inverted name="medium" size='big'/>
      </Grid.Column >
    </Grid>
  )
}

export default Icons
