import React from 'react'
import IconCreator from './creators/IconCreator.js'
import LanguageCreator from './creators/LanguageCreator.js'
import { Button, Modal, Segment, Grid, Divider, Image, Header } from 'semantic-ui-react'

const ProjectModal = (props) => {
  const {project} = props
  return(
    <Modal closeIcon trigger={<Button compact size="mini" attached="bottom">Learn More</Button>}>
      <Segment clearing className="modal-Segment">
        <Header as='h2' textAlign='center' className="modal-Title">
          {project.title}
        </Header>

        <Divider fitted />
        <Image src={project.image} rounded/>

        <Divider fitted />
        <br/>
        <p className="Expanded">
        {project.description}
        </p>
        <Divider fitted />
        <br/>
        <Grid columns={2}>
        <Grid.Column width={10}>
          {project.languages.map(lang => <LanguageCreator language={lang}/>)}
        </Grid.Column>
        <Grid.Column floated="right" width={2}>
          {project.icons.map(icon => <IconCreator icon={icon}/>)}
        </Grid.Column>
        </Grid>
      </Segment>
    </Modal>
  )
}

export default ProjectModal
