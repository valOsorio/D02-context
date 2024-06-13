import { useContext } from 'react'
import { PhotoContext } from '../context/PhotoContext'
import Card from 'react-bootstrap/Card'
import IconHeart from './IconHeart'

const Gallery = ({ photo }) => {
  const { photos, setPhotos } = useContext(PhotoContext)

  const addAndRemove = (id) => {
    const newPhotos = photos.map(photo => {
      if (photo.id === id) {
        return {
          ...photo,
          like: !photo.like
        }
      }
      return photo
    })
    setPhotos(newPhotos)
  }

  return (
    <div>
      <Card alt={photo.alt} className='cards mb-3'>
        <Card.Img variant='top' src={photo.src.tiny} className='image p-0' />
        <Card.Body className='card-body p-0'>
          <Card.Text className='card-text text-center px-1'>{photo.alt}</Card.Text>
          <span onClick={() => addAndRemove(photo.id)}>
            <IconHeart filled={photo.like} />
          </span>
        </Card.Body>
      </Card>
    </div>
  )
}
export default Gallery
