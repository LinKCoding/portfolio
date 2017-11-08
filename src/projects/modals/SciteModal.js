import React from 'react'
import { Button, Header, Image, Modal, Segment, Grid } from 'semantic-ui-react'

const SciteModal = () => (
  <Modal trigger={<Button compact attached="bottom">Learn More</Button>}>
    <Grid>
      <Grid.Column>
        <Segment style={{height:"80vh"}}>
        </Segment>
      </Grid.Column>
    </Grid>
  </Modal>
)

// <p className="Expanded">
// Scite was made with students in mind. Users can browse through various articles and create a Sci-Note using their personal note editor, lexicon, and dictionary to help guide them along. They can always go back and check their old notes and lexicon collection and edit them.
// </p>
export default SciteModal
