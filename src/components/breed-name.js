import React from 'react'
import { Link } from 'react-router-dom';
import './breed-name.css';

const BreedName = props => {
  let breedName = "";
  const { breed } = props;
  switch (breed) {
    case 'shepherd australian':
      breedName = "australian shepherd";
      break;
    case "germanshepherd":
      breedName = "german shepherd";
      break;
    case "pembroke":
      breedName = "pembroke corgi";
      break;
    default:
      breedName = `${breed}`;
      break;
  }


  return (
    <div className="flat-card">
      <Link to={`/dog-images/${breed}`} key={breed}>
        <p>{breedName}</p>
      </Link>
    </div>
  );
};

export default BreedName;
