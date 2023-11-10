import styled from '@emotion/styled';

export const CatalogSection = styled.section`
  padding-top: 150px;
  padding-bottom: 150px;
`;

export const LoadMoreButton = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 90px;
  background-color: inherit;
  border: none;
  color: var(--color-blue);

  font-size: 16px;
  font-weight: 500;
  line-height: 1.5; /* 150% */
  text-decoration-line: underline;
  transition: color 400ms ease-in-out;
  &:hover,
  &:focus {
    color: var(--color-accent-blue);
  }
`;
