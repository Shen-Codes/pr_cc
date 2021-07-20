import React, { useEffect, useState } from 'react'

const DogImage = props => {
  const { params } = props
  const [image, setImage] = useState()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getImage = async () => {
      setIsLoading(true)
      const url = params.length > 1 ? `https://dog.ceo/api/breed/${params[1]}/${params[0]}/images/random` : `https://dog.ceo/api/breed/${params[0]}/images/random`;
      const res = await fetch(url)
      const data = await res.json()
      setImage(data.message)
      setIsLoading(false)
    }
    getImage()
  }, []) 

  return (
    <div className="picture-of-dog">
      {isLoading ? <p>...loading picture</p> : <img src={image} alt="dog" className="picture-of-dog__img"/>}   
    </div>
  )
}

export default DogImage
