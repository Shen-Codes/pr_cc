import React, { useContext, useEffect } from 'react'
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import Home from './pages/home'
import './App.css';
import DogImages from './pages/dog-images';
import { DogsContext } from './store/context';
import { arrayifyJson } from './utils';

function App() {
  const { setList } = useContext(DogsContext)

  useEffect(() => {
    const fetchDogs = async () => {
      const res = await fetch('https://dog.ceo/api/breeds/list/all')
      const data = await res.json()
      const arrayOfData = arrayifyJson(data.message)
      setList(arrayOfData)
    }
    fetchDogs()
  }, [])

  return (
    <div className="App">
      <BrowserRouter >
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home" >
            <Home />
          </Route>
          <Route path="/dog-images/:breed">
            <DogImages />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
