import React from 'react'
import { Button, Modal, Segment, Grid, Divider, Image, Header, Icon } from 'semantic-ui-react'

const SciteModal = () => {
  return(
    <Modal closeIcon trigger={<Button compact size="mini" attached="bottom">Learn More</Button>}>
      <Segment clearing className="modal-Segment">
        <Header as='h2' textAlign='center' className="modal-Title">
          Scite (Science-Note)
        </Header>

        <Divider fitted />
        <Image src="scite-thumbnail.png" rounded/>

        <Divider fitted />
        <br/>
        <p className="Expanded">
        Scite was made with students in mind. Users can browse through various articles and create a scite using their personal note editor, lexicon, and dictionary to help guide them along. They can always go back and check their old notes and lexicon collection and edit them.
        </p>
        <Divider fitted />
        <br/>
        <Grid columns={2}>
        <Grid.Column width={10}>
          <Button color="blue" size="tiny" compact circular disabled inverted>JavaScript</Button>
          <Button color="blue" size="tiny" compact circular disabled inverted>React</Button>
          <Button color="blue" size="tiny" compact circular disabled inverted>Draft.js</Button>
          <Button color="blue" size="tiny" compact circular disabled inverted>Ruby</Button>
          <Button color="blue" size="tiny" compact circular disabled inverted>Ruby on Rails</Button>
          <Button color="blue" size="tiny" compact circular disabled inverted>PostgreSQL</Button>
        </Grid.Column>
        <Grid.Column floated="right" width={2}>
          <a href="https://github.com/LinKCoding/scite-frontend" target="_blank" rel="noopener noreferrer">
              <Icon floated="right" inverted name="github square" size='big' link/>
          </a>
          <a href="https://scite.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <Icon floated="right" inverted name="external square" size='big' link/>
          </a>
        </Grid.Column>
        </Grid>
      </Segment>
    </Modal>
  )
}

export default SciteModal
