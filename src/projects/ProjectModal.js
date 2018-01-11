import React from 'react'
import { Button, Modal, Segment, Grid, Divider, Image, Header, Icon } from 'semantic-ui-react'

const ProjectModal = () => {
  return(
    <Modal closeIcon trigger={<Button compact size="mini" attached="bottom">Learn More</Button>}>
      <Segment clearing className="modal-Segment">
        <Header as='h2' textAlign='center' className="modal-Title">
          Re-Find
        </Header>

        <Divider fitted />
        <Image src="reFind-thumbnail.png" rounded/>

        <Divider fitted />
        <br/>
        <p className="Expanded">
        Re-Find is a search engine that filters recipes based on ingredients. Users can filted based on a selection of common allergens provided; they also have the option of including custom allergies. After deciding on a dish they would want to eat, results will populate with dishes safe for consumption.
        </p>
        <Divider fitted />
        <br/>
        <Grid columns={2}>
        <Grid.Column width={10}>
          <Button color="blue" size="tiny" compact circular disabled inverted>JavaScript</Button>
          <Button color="blue" size="tiny" compact circular disabled inverted>Ruby</Button>
          <Button color="blue" size="tiny" compact circular disabled inverted>Ruby on Rails</Button>
          <Button color="blue" size="tiny" compact circular disabled inverted>MySQLite</Button>
        </Grid.Column>
        <Grid.Column floated="right" width={2}>
          <a href="https://github.com/LinKCoding/js-allergies-frontend" target="_blank" rel="noopener noreferrer">
              <Icon floated="right" inverted name="github square" size='big' link/>
          </a>
          <a href="https://github.com/LinKCoding/js-allergies-backend" target="_blank" rel="noopener noreferrer">
              <Icon floated="right" inverted name="github" size='big' link/>
          </a>
        </Grid.Column>
        </Grid>
      </Segment>
    </Modal>
  )
}

export default ProjectModal
