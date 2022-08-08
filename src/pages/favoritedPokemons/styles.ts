import styled from 'styled-components';

export const Container = styled.div`
  min-height: 87%;
`;

export const CardArea = styled.div`
  padding: 10px;
  place-items: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 15px;
`;
