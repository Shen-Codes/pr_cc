import React from 'react'
import { useHistory } from 'react-router';

const BackButton = () => {
  let history = useHistory()
  return (
    <button id="back-button" onClick={() => history.goBack()}>Go Back</button>
  )
}

export default BackButton
