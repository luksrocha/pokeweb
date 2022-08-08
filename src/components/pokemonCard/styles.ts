import styled from 'styled-components';

interface ContainerProps {
  backgroundColor: string;
  secondBgColor: string;
}

export const Container = styled.div<ContainerProps>`
  height: 280px;
  width: 230px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  padding: 10px;

  :hover {
    cursor: pointer;
  }

  ${({ secondBgColor, backgroundColor }) =>
    !secondBgColor &&
    `
    background-color: ${backgroundColor}
  `}

  ${({ secondBgColor, backgroundColor }) =>
    secondBgColor &&
    `
    background-image: linear-gradient(
      to bottom right,
      ${backgroundColor},
      ${secondBgColor}
    )
  `}
`;

export const PokemonInfoArea = styled.div`
  display: flex;
  margin-top: 20px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
`;

export const PokemonName = styled.h4`
  font-size: 16px;
  text-transform: uppercase;
`;

export const PokemonImg = styled.img`
  margin-top: 25px;
  height: 125px;
`;

export const ImagesContainer = styled.div`
  display: flex;
`;
