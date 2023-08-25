import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { GalleryStyled, GalleryItemStyled } from './ImageGallery.styled';

export const ImageGallery = ({ arrImages }) => {
  return (
    <GalleryStyled>
      {arrImages.map(({ id, webformatURL, largeImageURL, tags }) => (
        <GalleryItemStyled key={id}>
          <ImageGalleryItem
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tags={tags}
          />
        </GalleryItemStyled>
      ))}
    </GalleryStyled>
  );
};
