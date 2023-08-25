import { FcSearch } from 'react-icons/fc';

import {
  SearchbarStyled,
  SearchFormStyled,
  BtnStyled,
  BtnLabelStyled,
  InputStyled,
} from './Searchbar.styled';

export const Searchbar = ({ changeQuery }) => {
  return (
    <SearchbarStyled>
      <SearchFormStyled onSubmit={changeQuery}>
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
        />
      </SearchFormStyled>
    </SearchbarStyled>
  );
};
