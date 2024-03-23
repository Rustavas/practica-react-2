import { getPhotos } from 'apiService/photos';
import { Button, Form, Loader, PhotosGallery } from 'components';
import { useEffect, useState } from 'react';

export const Photos = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [pictures, setPhotos] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const onSearch = value => {
    setPhotos([]);
    setPage(1);
    setTotalResults(0);
    setQuery(value.trim());
    setError(null);
  };
  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchPhotos = async () => {
      setIsLoading(true);
      try {
        const { photos, total_results } = await getPhotos(query, page);
        setPhotos([...pictures, ...photos]);
        setTotalResults(total_results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPhotos();
  }, [query, page]);

  const onClick = () => {
    setPage(page + 1);
  };

  return (
    <>
      {/* <Text textAlign="center">Let`s begin search 🔎</Text> */}
      <Form onSearch={onSearch} />
      <PhotosGallery photos={pictures} />
      {pictures.length > 0 && totalResults > pictures.length && (
        <Button onClick={onClick}>View more</Button>
      )}
      {pictures.length === 0 && query !== '' && !error && (
        <p>sorry by your queries {query} nothing was found</p>
      )}
      {error && <p>sorry there is an error {error}</p>}
      {isLoading && <Loader />}
    </>
  );
};
