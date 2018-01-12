import React from 'react'
import { Button } from 'semantic-ui-react'

const LanguageCreator = (props) => {
  return(
    <Button color="blue" size="tiny" compact circular disabled inverted>
      {props.language}
    </Button>
  )
}

export default LanguageCreator
