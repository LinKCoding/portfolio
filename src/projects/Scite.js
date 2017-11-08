import React from 'react'
import SciteModal from './modals/SciteModal'
import { Grid, Image, Segment, Divider } from 'semantic-ui-react'

class Scite extends React.Component {
  render(){
    return(
      <Grid.Column width={4}>
        <Segment className="project">
          <Image src='scite-thumbnail.png'/>
          <Divider horizontal inverted className="Header"> Scite </Divider>
          <SciteModal />
        </Segment>
      </Grid.Column>
    )
  }
}

export default Scite
