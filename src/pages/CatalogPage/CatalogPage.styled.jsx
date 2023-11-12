import styled from '@emotion/styled';

export const CatalogSection = styled.section`
  padding-top: 30px;
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
export const HiddenTitle = styled.h2`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;
