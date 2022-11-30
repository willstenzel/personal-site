import { useState, useEffect } from 'react'
import PhotoCard from './PhotoCard';

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('/api/photos')
      .then((res) => res.json())
      .then((data) => {
        setPhotos(data.photos)
      })
  }, []);

  return (
    <div>
      <div className="masonry">
        {photos.map((photo) => (
          <div className="rounded-lg overflow-hidden mb-8" key={photo.date}>
            <PhotoCard url={photo.url} date={photo.date} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
