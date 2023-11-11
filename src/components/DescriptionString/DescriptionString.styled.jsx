import styled from '@emotion/styled';

export const DiscriptionText = styled.p`
  white-space: ${(props) => (props.wrapText ? 'wrap' : 'nowrap')};
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--color-gray);
`;
export const SpanStyled = styled.span`
  color: var(--color-lightgray);
`;
