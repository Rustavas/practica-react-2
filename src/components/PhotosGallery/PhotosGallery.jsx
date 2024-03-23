import { PhotosGalleryItem } from "../PhotosGalleryItem/PhotosGalleryItem";
import { Grid } from "../Grid/Grid";

export const PhotosGallery = ({photos}) => {
  return (
    <Grid>
  
  {photos.map((item)=> <PhotosGalleryItem key = {item.id} item={item}/>)}
   
</Grid>
  );
};
