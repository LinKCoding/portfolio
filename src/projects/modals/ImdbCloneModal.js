import React from 'react'
import { Button, Modal, Segment, Grid, Divider, Image, Header, Icon } from 'semantic-ui-react'

const ImdbCloneModal = () => {
  return(
    <Modal closeIcon trigger={<Button compact size="mini" attached="bottom">Learn More</Button>}>
      <Segment clearing style={{height:"80vh"}} className="modal-Segment">
        <Header as='h2' textAlign='center' className="modal-Title">
          IMDB Clone
        </Header>

        <Divider fitted />
        <Image src="imdbClone-thumbnail.png" rounded/>

        <Divider fitted />
        <br/>
        <p className="Expanded">
        IMDB clone is exactly like it sounds. However, instead of a complete website, it is a CLI application which allows users to research through a database containing 5,000 movie titles. With a twist of humor, users can search through titles, ratings, and even get recommendations based on year released and a rating threshold.
        </p>
        <Divider fitted />
        <br/>
        <Grid columns={2}>
        <Grid.Column width={10}>
          <Button color="blue" size="tiny" compact circular disabled inverted>Ruby</Button>
          <Button color="blue" size="tiny" compact circular disabled inverted>MySQLite</Button>
        </Grid.Column>
        <Grid.Column floated="right" width={2}>
          <a href="https://github.com/LinKCoding/imdb-clone" target="_blank" rel="noopener noreferrer">
              <Icon floated="right" inverted name="github square" size='big' link/>
          </a>
        </Grid.Column>
        </Grid>
      </Segment>
    </Modal>
  )
}

export default ImdbCloneModal
