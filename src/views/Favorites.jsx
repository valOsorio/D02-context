import { useContext } from 'react'
import { PhotoContext } from '../context/PhotoContext'
import Gallery from '../components/Gallery'

const Favorites = () => {
  const { photos } = useContext(PhotoContext)
  return (

    <div className='App'>
      <h1>Fotos Favoritas</h1>
      <div className='p-3 gallery grid-columns-4'>
        {photos &&
        photos.filter(photo => photo.like).map(photo => <Gallery key={photo.id} photo={photo} />)}
      </div>
    </div>
  )
}
export default Favorites
