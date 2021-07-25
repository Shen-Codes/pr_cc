import React, { useContext, useEffect, FC } from 'react'
import { BreedName, FilterBar } from '../../components';
import { DogsContext } from '../../store/DogsContext';
import './home.css';

export const Home: FC = () => {
  const { filter, setFilteredBreeds, filteredBreeds, error } = useContext(DogsContext);

  useEffect(() => {
    setFilteredBreeds();
  }, [filter]);


  return (
    <div>
      <h1>Click on a dog breed to see 4 random images</h1>
      <span>Filter</span>
      <FilterBar />
      <div id="list-of-breeds">
        {error ? <p>Something went wrong {error}</p> : filteredBreeds.map(breed => {
          return (
            <BreedName breed={breed} key={breed}/>
          );
        })}
      </div>
    </div>
  );
};
