/* eslint-disable react/require-default-props */
import React from 'react';
import { BsInfoCircle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { pokemonsBGColor } from '../../constants/PokemonBGColor';
import { useOnScreen } from '../../hooks/useOnScreen';
import { PokemonInfo } from '../../types/pokemonTypes';
import { usePokemonCardImages } from './hooks/usePokemonCardImages';
import { Container, ImagesContainer, PokemonImg, PokemonInfoArea, PokemonName } from './styles';

type PokemonCardProps = {
  pokemonInfo: PokemonInfo;
  arrLength?: number;
  onLastPokemon?: () => void;
};

/**
 * THE POKEMON CARD HAS A FORWARDREF AND THE HOME COMPONENT PUT A REF ON IT FOR THE LAST POKEMON
 */

const PokemonCard = React.forwardRef(
  ({ onLastPokemon = () => null, arrLength = 0, pokemonInfo }: PokemonCardProps, ref: React.Ref<HTMLDivElement>) => {
    const { types, name, id, sprites } = pokemonInfo;
    const onScreen = useOnScreen(ref);
    const primaryType = types[0]?.type.name;
    const secondaryType = types[1]?.type.name;
    const { firstTypeImage, secondTypeImage } = usePokemonCardImages(primaryType, secondaryType);
    const navigate = useNavigate();

    /**
     * HERE IS THE OBSERVER CHECK IF THE COMPONENT IT'S ON SCREEN AND IF IT'S THE LAST ITEM
     * IF IT IS, IT GETS THE NEXT 20 POKEMONS OF THE LIST
     */
    if (onScreen && id + 1 === arrLength) {
      onLastPokemon();
    }

    const navigateTo = () => {
      navigate(`/pokemon/${id}`);
    };

    return (
      <Container
        backgroundColor={pokemonsBGColor[primaryType]}
        secondBgColor={pokemonsBGColor[secondaryType]}
        onClick={navigateTo}
        ref={ref}
      >
        <PokemonInfoArea>
          <span>#{id}</span>
          <BsInfoCircle />
        </PokemonInfoArea>
        <PokemonImg src={sprites.front_default} alt="" />
        <PokemonName>{name}</PokemonName>
        <ImagesContainer>
          <img src={firstTypeImage} alt={types[0].type.name} />
          {secondaryType && <img src={secondTypeImage} alt={types[0].type.name} />}
        </ImagesContainer>
      </Container>
    );
  }
);

export { PokemonCard };
