import React, { FC } from 'react';
import { useHistory } from 'react-router';

export const BackButton: FC = () => {
  let history = useHistory();
  return (
    <button id="back-button" onClick={() => history.goBack()}>Go Back</button>
  );
};
