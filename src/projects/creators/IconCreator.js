import React from 'react'
import { Icon } from 'semantic-ui-react'

const IconCreator = (props) => {
  console.log(props, "this is props");
  console.log(props.icon);
  const { icon } = props
  return(
    <a href={icon.link} target="_blank" rel="noopener noreferrer">
        <Icon floated="right" inverted name={icon.name} size='big' link/>
    </a>
  )
}

export default IconCreator
