import React, { useContext, useEffect } from 'react'
import { BreedName, FilterBar } from '../../components';
import { DogsContext } from '../../store/DogsContext';
import './home.css'

export const Home = () => {
  const { filter, setFilteredBreeds, filteredBreeds } = useContext(DogsContext);

  useEffect(() => {
    setFilteredBreeds()
  }, [filter])


  return (
    <div>
      <h1>Click on a dog breed to see 4 random images</h1>
      <span>Filter</span>
      <FilterBar />
      <div id="list-of-breeds">
        {filteredBreeds.map(breed => {
          return (
            <BreedName breed={breed} key={breed}/>
          )
        })}
      </div>
    </div>
  )
}
