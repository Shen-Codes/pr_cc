import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './breed-name.css';

export type BreedProps = {
  breed: string,
}

export const BreedName: FC<BreedProps> = (props: BreedProps) => {
  const { breed } = props;
  const breedName = CorrectBreedName(breed)

  return (
    <div className="flat-card">
      <Link to={`/dog-images/${breed}`} key={breed}>
        <p>{breedName}</p>
      </Link>
    </div>
  );
};

export const CorrectBreedName = (breed: string): string => {
  switch (breed) {
    case 'shepherd australian':
      return "australian shepherd";
    case "germanshepherd":
      return "german shepherd";
    case "pembroke":
      return "pembroke corgi";
    default:
      return `${breed}`;
  };
}
