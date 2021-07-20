Project is bootstrapped with Create-react-app.

To run locally, clone the repo, run npm install, then npm start.

Visit ___ for project mounted to Firebase.

---

# Software Requirement Analysis

## Home Page

Child components

- search bar
- name of dog breed 

**Home page Pseudo code**
```
const HomePage = props => {
  useEffect - filter dog breeds

  return (
    h1 - Choose Breed to See Random Images
    <Search Bar>
    dogBreedsList.map( () => <BreedName props={breed, subBreed?}>)
  )
}
```

**Search Bar Pseudo code**
```
const SearchBar = props => {
  useReducer()
  useContext()

  return (
    span - filter by breed
    input
    button to clear field
  )
}
```

**Dog BreedName Pseudo code**
```
const DogBreedName = props => {

  return (
    button as link
    p - subBreed? breed
  )
}
```

## Dog Images Page

Child components

- back button


**Dog Images Page Pseudo code**
```
const DogImagesPage = props => {
  const images = new Array(4)
  return (
    images.map(<dog-image>)
    <backbutton>
  )
}
```


**Back button Pseudo code**
```
const BackButton = props => {
  useHistory.goBack()

  return (
    button as link 
  )
}
```
back to home with saved history


**Dog Image Pseudo code**
```
const DogImage = props => {
  useEffect(fetch => pass to local state)

  return (
    <image src={image}/>
  )
}
```
the image itself will take care of the random api fetch and handle its own local state

## UseContext and UseReducer as Store

this solution is sufficient since the app is small.
Will have state for list of dogs, filter keyword

Provider is set at very top level of the app. Initial api call to load dogs will be called and dogslist state set at App.js