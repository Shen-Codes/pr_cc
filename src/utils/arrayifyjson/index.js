const arrayifyJson = data => {
  const arrayOfBreeds = [];
  Object.keys(data).forEach(breed => {
    if(data[breed].length > 0) {
      data[breed].forEach(subBreed => {
        arrayOfBreeds.push(`${subBreed} ${breed}`);
      });
    } else { 
      arrayOfBreeds.push(breed);
    }
  });
  return arrayOfBreeds;
};

export default arrayifyJson;
