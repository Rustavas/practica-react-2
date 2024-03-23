import { getPhotos } from 'apiService/photos';
import { Form, Grid, PhotosGallery, Text } from 'components';
import { useEffect, useState } from 'react';

export const Photos = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const onSearch = value => {
    setQuery(value);
  };
  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchPhotos = async () => {
      try {
        const { photos, total_results } = await getPhotos(query, page);
        setPhotos(photos);
        setTotalResults(total_results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPhotos();
  }, [query, page]);

  return (
    <>
      {/* <Text textAlign="center">Let`s begin search 🔎</Text> */}
      <Form onSearch={onSearch} />
     <PhotosGallery photos={photos}/>
    </>
  );
};
