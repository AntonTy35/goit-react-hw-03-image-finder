import styled from 'styled-components';

export const GalleryStyled = styled.ul`
  display: grid;
  max-width: calc(100vw - 28px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 8px;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;

export const GalleryItemStyled = styled.li`
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
