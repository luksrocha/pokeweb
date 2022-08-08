import styled from 'styled-components';

export const Content = styled.div`
  height: calc(100% - 80px); //ALL CONTENT - HEADER SIZE
  width: 100%;
  padding: 3px;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: auto;
`;

export const NumberAndStarArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NumberOfPokemon = styled.span`
  font-size: 11px;
  margin-left: 5px;
`;

export const TypeArea = styled.div`
  width: 100%;
  margin-top: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DetailsArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

export const Image = styled.img`
  height: 130px;
  width: 130px;
`;

export const ImageArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PokemonInfoArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const PokemonDescriptionArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PokemonDescription = styled.span`
  font-size: 14px;
  text-align: center;
`;
export const PokemonStatusArea = styled.div`
  margin-top: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PokemonDetailsArea = styled.div`
  background-color: #fff;
  border-radius: 3px;
  width: 98%;
  padding: 3px;
  height: 100%;
`;
