import React from 'react'
import SciteModal from './modals/SciteModal'
import { Grid, Image, Segment, Divider } from 'semantic-ui-react'

class Scite extends React.Component {
  state = {
    visibility: "hidden"
  }
  render(){
    return(
      <Grid.Column width={4}>
        <Segment className="project">
          <Image src='scite-thumbnail.png'/>
          <Divider horizontal inverted className="Header"> Scite </Divider>
          <p className="Description">
            JavaScript, React.js, Ruby, and Ruby on Rails project
          </p>
          <SciteModal />
        </Segment>
      </Grid.Column>
    )
  }
}

export default Scite
