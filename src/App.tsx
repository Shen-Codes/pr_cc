import React, { useContext, useEffect } from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import { Home, DogImages } from './pages';
import { DogsContext } from './store/DogsContext';
import { arrayifyJson } from './utils';
import './App.css';

function App() {
  const { setList, setError } = useContext(DogsContext);

  useEffect(() => {
    const fetchDogs = async () => {
      try{
        const res = await fetch('https://dog.ceo/api/breeds/list/all');
        const data = await res.json();
        const arrayOfData = arrayifyJson(data.message);
        setList(arrayOfData);
      } catch (error) {
        setError(error)
      }
    }
    fetchDogs();
  }, []);

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
};

export default App;
