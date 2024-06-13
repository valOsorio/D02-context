import { createContext, useState, useEffect } from 'react'

export const PhotoContext = createContext()

const PhotoProvider = ({ children }) => {
  const [photos, setPhotos] = useState(0)

  const getData = async () => {
    const response = await fetch('./photos.json')
    const data = await response.json()
    const allData = data.photos.map((photo) => ({ ...photo, like: false }))
    console.log(allData)
    setPhotos(allData)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <PhotoContext.Provider value={{ photos, setPhotos }}>
      {children}
    </PhotoContext.Provider>
  )
}

export default PhotoProvider
