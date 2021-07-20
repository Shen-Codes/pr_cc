import React, { useContext, useEffect } from 'react'
import BreedName from '../components/breed-name';
import SearchBar from '../components/search-bar';
import { DogsContext } from '../store/context';
import './home.css'

const Home = () => {
  const { filter, setFilteredBreeds, filteredBreeds } = useContext(DogsContext);

  useEffect(() => {
    setFilteredBreeds()
  }, [filter])


  return (
    <div>
      <h1>Click on a dog breed to see 4 random images</h1>
      <span>Filter</span>
      <SearchBar />
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



export default Home
