import styled from 'styled-components';

type PillsContainerProps = {
  bgColor: string;
};

export const PillsContainer = styled.div<PillsContainerProps>`
  padding: 10px;
  margin: 5px;
  min-width: 75px;
  max-width: 100px;
  border-radius: 30px;
  color: #fff;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.bgColor || '#999'};
  font-size: 11px;
`;
