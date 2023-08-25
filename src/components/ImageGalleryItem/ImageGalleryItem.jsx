import { Component } from 'react';
import { ModalItem } from 'components/Modal/Modal';
import { ImgStyled } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };
  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { webformatURL, largeImageURL, tags } = this.props;

    return (
      <>
        <ImgStyled src={webformatURL} alt={tags} onClick={this.openModal} />

        <ModalItem onOpen={this.state.isModalOpen} onClose={this.closeModal}>
          <img src={largeImageURL} alt={tags} />
        </ModalItem>
      </>
    );
  }
}
