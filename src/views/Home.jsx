import { useContext } from 'react'
import { PhotoContext } from '../context/PhotoContext'
import Gallery from '../components/Gallery'

const Home = () => {
  const { photos } = useContext(PhotoContext)
  return (
    <div className='App'>
      <h1>Natural Pic</h1>
      <div className='gallery grid-columns-5 p-3'>
        {photos &&
        photos.map((photo) => <Gallery key={photo.id} photo={photo} />)}
      </div>
    </div>
  )
}
export default Home
