import React from 'react'
import KofetcherModal from './modals/KofetcherModal'
import { Grid, Image, Segment, Divider } from 'semantic-ui-react'

class Kofetcher extends React.Component {
  render(){
    return(
      <Grid.Column width={4}>
        <Segment className="project">
          <Image src='kofetcher-thumbnail.png'/>
          <Divider horizontal inverted className="Header"> Kofetcher </Divider>
          <KofetcherModal />
        </Segment>
      </Grid.Column>
    )
  }
}

export default Kofetcher
