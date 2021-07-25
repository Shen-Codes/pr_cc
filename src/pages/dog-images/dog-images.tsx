import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { BackButton, DogImage } from '../../components';
import './dog-images.css';

export const DogImages: FC = () => {
  const { breed } = useParams();
  const paramSplit = breed.split(' ');
  const fourArray = new Array(4).fill(paramSplit);

  return (
    <div>
      <div id="image-container">
        {fourArray.map((paramSplit, idx) => {
          return (
            <DogImage params={paramSplit} key={idx} />
          );
        })}
      </div>
      <BackButton />
    </div>
  );
};
