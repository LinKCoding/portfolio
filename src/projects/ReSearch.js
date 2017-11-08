import React from 'react'
import ReSearchModal from './modals/ReSearchModal'
import { Grid, Image, Segment, Divider } from 'semantic-ui-react'

class ReSearch extends React.Component {
  render(){
    return(
      <Grid.Column width={4}>
        <Segment className="project">
          <Image src='research-thumbnail.png'/>
          <Divider horizontal inverted className="Header"> Re-Find </Divider>
          <ReSearchModal />
        </Segment>
      </Grid.Column>
    )
  }
}

export default ReSearch
