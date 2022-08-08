/* eslint-disable camelcase */
import { useParams } from 'react-router-dom';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

import { useMemo } from 'react';
import { Pills } from '../../components/pills/Pills';
import { pokemonsBGColor } from '../../constants/PokemonBGColor';
import { pokemonInfoDataKeys } from '../../constants/PokemonInfoConstants';
import { pokemonStorageConstants } from '../../constants/pokemonStorageConstants';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { usePokemonTypes } from '../../hooks/usePokemonTypes';
import { useSelectedPokemonData } from '../../hooks/useSelectedPokemonData';
import { PokemonInfo } from './components/pokemonInfo/PokemonInfo';
import { PokemonSliderStatus } from './components/pokemonSliderStatus/PokemonSliderStatus';

import {
  Content,
  DetailsArea,
  Image,
  ImageArea,
  NumberAndStarArea,
  NumberOfPokemon,
  PokemonDescription,
  PokemonDescriptionArea,
  PokemonDetailsArea,
  PokemonInfoArea,
  PokemonStatusArea,
  TypeArea
} from './styles';

interface PokemonDetailsPageParams {
  pokemonID: string;
}

const PokemonDetailsPage = () => {
  const { pokemonID } = useParams<keyof PokemonDetailsPageParams>() as PokemonDetailsPageParams;

  // THE LOCALSTORAGE HOOK SAVE AND RETRIEVE A VALUE FROM LOCAL STORAGE
  const [favoritedPokemons, setFavoritedPokemons] = useLocalStorage(pokemonStorageConstants.FAVORITE_POKEMON, []);

  const selectedPokemon = useSelectedPokemonData(pokemonID);
  const { id, sprites, types, weight, height, description, stats, name, base_experience } = selectedPokemon;

  const { primaryType, secondaryType } = usePokemonTypes(types);

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const pokemomAlreadyFavorite = useMemo(() => {
    return favoritedPokemons.includes(Number(pokemonID));
  }, [favoritedPokemons, pokemonID]);

  return (
    <Content>
      <DetailsArea>
        <span style={{ fontWeight: 'bold' }}>{capitalizeFirstLetter(name)}</span>
        <NumberAndStarArea>
          {pokemomAlreadyFavorite ? (
            <AiFillStar
              onClick={() =>
                setFavoritedPokemons((prev: number[]) => {
                  const filteredItem = prev.filter((item) => item !== Number(pokemonID));
                  return filteredItem;
                })
              }
            />
          ) : (
            <AiOutlineStar
              onClick={() =>
                setFavoritedPokemons((prev: number[]) => {
                  return [...prev, id];
                })
              }
            />
          )}

          <NumberOfPokemon style={{ fontSize: 11 }}>
            #<strong>{id.toString().padStart(3, '00')}</strong>
          </NumberOfPokemon>
        </NumberAndStarArea>
      </DetailsArea>
      <ImageArea>
        <Image src={sprites.front_default} alt="" />
      </ImageArea>
      <PokemonDetailsArea>
        <TypeArea>
          <Pills color={pokemonsBGColor[primaryType]}>{capitalizeFirstLetter(primaryType)}</Pills>
          {secondaryType && <Pills color={pokemonsBGColor[secondaryType]}>{capitalizeFirstLetter(secondaryType)}</Pills>}
        </TypeArea>
        <PokemonInfoArea>
          <PokemonInfo variant={pokemonInfoDataKeys.WEIGHT} value={weight / 10} />
          <PokemonInfo variant={pokemonInfoDataKeys.HEIGHT} value={height / 10} />
          <PokemonInfo variant={pokemonInfoDataKeys.EXPERIENCE} value={base_experience} />
        </PokemonInfoArea>
        <PokemonDescriptionArea>
          <PokemonDescription>{description}</PokemonDescription>
        </PokemonDescriptionArea>
        <PokemonStatusArea>
          {stats.map((item) => (
            <PokemonSliderStatus color={pokemonsBGColor[primaryType]} status={item.stat.name} value={item.base_stat} />
          ))}
        </PokemonStatusArea>
      </PokemonDetailsArea>
    </Content>
  );
};

export { PokemonDetailsPage };
