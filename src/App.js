import React, {useState} from 'react';
import photosData from './image.json'

const Slider = () => {
  const [photo, setPhoto] = useState(0)

  const photos = photosData

  const handlePrev = () => {
    setPhoto(prevIndex => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setPhoto(prevIndex => (prevIndex === photos.length  -1 ? 0 : prevIndex + 1))
  }

  const currentPhoto = photos[photo]

  return (
    <div className='divs'>
      <h2>{currentPhoto.tytle}</h2>

      <img src={currentPhoto.src} alt={currentPhoto.tytle} className='photo'/>

      <div className='button'>
        <button className='click' onClick={handlePrev}>Назад</button>
        <button className='click' onClick={handleNext}>Далее</button>
      </div>
    </div>
  )
}
export default Slider;
