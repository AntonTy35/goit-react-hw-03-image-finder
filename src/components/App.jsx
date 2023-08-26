import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchQuery } from 'api';
import { Loader } from './Loader/Loader';
import { LoadMoreBtn } from './Button/Button';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    isLoading: false,
    isLoadMore: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      try {
        this.setState({ isLoading: true });

        const { hits, totalHits } = await fetchQuery(
          this.queryWithoutId(query),
          page
        );
        if (hits.length === 0) {
          return toast.error(
            'Sorry, there are no matching images for your search. Please try again'
          );
        }

        const arrImages = hits.map(
          ({ id, webformatURL, largeImageURL, tags }) => ({
            id,
            webformatURL,
            largeImageURL,
            tags,
          })
        );

        const totalPage = totalHits / 12;
        totalPage > page
          ? this.setState({ isLoadMore: true })
          : this.setState({ isLoadMore: false });

        this.setState(prevState => ({
          images: [...prevState.images, ...arrImages],
        }));
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  changeQuery = newQuery => {
    if (newQuery !== this.state.query) {
      this.setState({
        query: `${Date.now()}/${newQuery}`,
        images: [],
        page: 1,
      });
    }
  };

  queryWithoutId = newQuery => {
    return newQuery.slice(newQuery.indexOf('/') + 1);
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, isLoading, isLoadMore } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.changeQuery} />
        {images.length > 0 && <ImageGallery arrImages={images} />}
        {isLoading && <Loader />}
        {images.length > 0 && !isLoading && isLoadMore && (
          <LoadMoreBtn onClick={this.handleLoadMore} />
        )}
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}

// handleSearchbarSubmit = event => {
//   event.preventDefault();

//   const newQuery = event.target.elements.query.value.toLowerCase().trim();
//   newQuery === ''
//     ? toast.error('Enter your query please')
//     : this.changeQuery(newQuery);

//   event.target.reset();
// };
