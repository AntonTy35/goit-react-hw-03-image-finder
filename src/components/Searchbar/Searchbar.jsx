import { FcSearch } from 'react-icons/fc';
import { toast } from 'react-toastify';

import { Component } from 'react';

import {
  SearchbarStyled,
  SearchFormStyled,
  BtnStyled,
  BtnLabelStyled,
  InputStyled,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleSearchbarSubmit = event => {
    event.preventDefault();

    this.state.query === ''
      ? toast.error('Enter your query please')
      : this.props.onSubmit(this.state.query);

    this.setState({ query: '' });

    event.target.reset();
  };

  handleChangeQuery = evt => {
    this.setState({ query: evt.target.value.toLowerCase().trim() });
  };

  render() {
    return (
      <SearchbarStyled>
        <SearchFormStyled onSubmit={this.handleSearchbarSubmit}>
          <BtnStyled type="submit">
            <FcSearch size="30" />
            <BtnLabelStyled>Search</BtnLabelStyled>
          </BtnStyled>

          <InputStyled
            type="text"
            name="query"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleChangeQuery}
          />
        </SearchFormStyled>
      </SearchbarStyled>
    );
  }
}
