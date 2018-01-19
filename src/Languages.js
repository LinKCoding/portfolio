import React from 'react'
import { Grid } from 'semantic-ui-react'

const Languages = () => {
  return(
    <Grid.Row>
      <Grid columns='equal' stackable>
        <Grid.Column width={3}>
          <p id="skills">
            Skills:
          </p>
        </Grid.Column>
        <Grid.Column id="languages">
          Languages: ["JavaScript", "Ruby", "SQL", "HTML5", "CSS"]
          <br/>
          Frameworks: ["React", "Ruby on Rails", "Sinatra"]
          <br/>
          Libraries: ["Redux", "ActiveRecord", "Draft.js", "Semantic-UI"]
        </Grid.Column>
      </Grid>
    </Grid.Row>
  )
}

export default Languages
