import React from 'react'
import { Button, Modal, Segment, Grid, Divider, Image, Header, Icon } from 'semantic-ui-react'

const KofetcherModal = () => {
  return(
    <Modal closeIcon trigger={<Button compact size="mini" attached="bottom">Learn More</Button>}>
      <Segment clearing className="modal-Segment">
        <Header as='h2' textAlign='center' className="modal-Title">
          Kofetcher
        </Header>

        <Divider fitted />
        <Image src="kofetcher-thumbnail.png" rounded/>

        <Divider fitted />
        <br/>
        <p className="Expanded">
        Kofetcher was inspired by the food delivery and tech integration services like grubhub. It explores a niche venue of delivering coffee to users from their shop of choice. Users will post an order with a set gratuity and another group of users (Fetchers), can accept this request. Users and fetchers are matched based on location and the delivery status is updated between the two parties.
        </p>
        <Divider fitted />
        <br/>
        <Grid columns={2}>
        <Grid.Column width={10}>
          <Button color="blue" size="tiny" compact circular disabled inverted>Ruby</Button>
          <Button color="blue" size="tiny" compact circular disabled inverted>Ruby on Rails</Button>
          <Button color="blue" size="tiny" compact circular disabled inverted>MySQLite</Button>
        </Grid.Column>
        <Grid.Column floated="right" width={2}>
          <a href="https://github.com/LinKCoding/kofetch" target="_blank" rel="noopener noreferrer">
              <Icon floated="right" inverted name="github square" size='big' link/>
          </a>
        </Grid.Column>
        </Grid>
      </Segment>
    </Modal>
  )
}

export default KofetcherModal
