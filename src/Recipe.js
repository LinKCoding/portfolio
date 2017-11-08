import React from 'react'
import { Grid, Image, Segment, Divider } from 'semantic-ui-react'

class Recipe extends React.Component {
  render(){
    return(
      <Grid.Column width={4}>
        <Segment className="project">
          <Image src='recipes-thumbnail.png'/>
          <Divider horizontal inverted className="Header"> Recipe </Divider>
          <p className="Description">
            Vanilla JavaScript, Ruby, and Ruby on Rails project
          </p>
        </Segment>
      </Grid.Column>
    )
  }
}

export default Recipe
