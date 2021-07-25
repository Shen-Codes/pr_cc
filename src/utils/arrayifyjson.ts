export type DataType = {
  [key: string]: string[]
}

export const arrayifyJson = (data: DataType) => {
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
