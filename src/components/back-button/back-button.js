import React from 'react'
import { useHistory } from 'react-router';

export const BackButton = () => {
  let history = useHistory()
  return (
    <button id="back-button" onClick={() => history.goBack()}>Go Back</button>
  )
}