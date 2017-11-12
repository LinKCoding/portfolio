import React from 'react'
import ReFindModal from './modals/ReFindModal'
import { Grid, Image, Segment, Divider } from 'semantic-ui-react'

class ReSearch extends React.Component {
  render(){
    return(
      <Grid.Column width={4}>
        <Segment className="project">
          <Image src='reFind-thumbnail.png'/>
          <Divider horizontal inverted className="Header"> Re-Find </Divider>
          <ReFindModal />
        </Segment>
      </Grid.Column>
    )
  }
}

export default ReSearch
