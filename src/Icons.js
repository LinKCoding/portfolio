import React from 'react'
import { Grid, Icon } from 'semantic-ui-react'

const Icons = () => {

  return(
    <Grid.Row>
      <Grid centered columns={5}>
        <Grid.Column>
          <a href="resume.pdf" target="_blank">
            <Icon inverted name="file text outline" size='big' link/>
          </a>
        </Grid.Column>
        <Grid.Column>
          <a href="https://github.com/LinKCoding" target="_blank" rel="noopener noreferrer">
            <Icon inverted name="github square" size='big'/>
          </a>
        </Grid.Column>
        <Grid.Column>
          <a href="https://www.linkedin.com/in/kenny-lin-developer/" target="_blank" rel="noopener noreferrer">
            <Icon inverted name="linkedin square" size='big'/>
          </a>
        </Grid.Column>
        <Grid.Column>
          <Icon inverted name="mail" size='big'/>
        </Grid.Column >
        <Grid.Column>
          <a href="https://medium.com/@kenny.lin" target="_blank" rel="noopener noreferrer">
            <Icon inverted name="medium" size='big'/>
          </a>
        </Grid.Column >
      </Grid>
    </Grid.Row>
  )
}

export default Icons
