import React from 'react'
import { useParams } from 'react-router-dom';
import BackButton from '../components/back-button'
import DogImage from '../components/dog-image';
import './dog-images.css'

const DogImages = () => {
  const { breed } = useParams();
  const paramSplit = breed.split(' ');
  const fourArray = new Array(4).fill(paramSplit)

  return (
    <div>
      <div id="image-container">
        {fourArray.map(paramSplit => {
          return (
            <DogImage params={paramSplit} />
          )
        })}
      </div>  
      <BackButton />
    </div>
  )
}

export default DogImages
