import { ReactNode, useCallback, useMemo, useReducer, useState } from 'react';
import { getNextPokemons, getPokemon, getPokemonDescription, getPokemons } from '../../api/pokemon';
import { pokemonStorageConstants } from '../../constants/pokemonStorageConstants';
import { PokemonInfoReturn } from '../../types/pokemonTypes';
import { createHashMap } from '../../utils/arrayUtil';
import { PokemonContext } from './PokemonContext';
import { pokemonReducer } from './PokemonReducer';

interface IPokemonProvider {
  children: ReactNode;
}

const PokemonProvider = ({ children }: IPokemonProvider) => {
  const [state, dispatch] = useReducer(pokemonReducer, {
    pokemons: {} as PokemonInfoReturn,
    nextPokemons: '',
    favoritedPokemons: {} as PokemonInfoReturn
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleIsLoading = useCallback((value: boolean) => {
    setIsLoading(value);
  }, []);

  const handlePokemons = useCallback(async () => {
    setIsLoading(true);
    const { results, next } = await getPokemons();

    const pokemonPromises = results.map((pokemon) => getPokemon(pokemon.name));

    const pokemonData = await Promise.all(pokemonPromises).then((res) => {
      return createHashMap(res, 'id');
    });

    const pokemonDescriptionPromises = results.map((pokemon) => getPokemonDescription(pokemon.name));

    const pokemonDataWithDescription = await Promise.all(pokemonDescriptionPromises).then((res) => {
      return res;
    });

    const pokemonDataNames = Object.keys(pokemonData);

    pokemonDataNames.forEach((pokemonName, index) => {
      pokemonData[pokemonName] = {
        ...pokemonData[pokemonName],
        description: pokemonDataWithDescription[index].flavor_text_entries[0].flavor_text
      };
    });

    dispatch({ type: 'GET_POKEMONS', payload: pokemonData });
    dispatch({ type: 'FETCH_NEXT_POKEMON', payload: next });
    setIsLoading(false);
  }, []);

  const handleNextPokemons = useCallback(async () => {
    const { nextPokemons, pokemons } = state;
    const { results, next } = await getNextPokemons(nextPokemons);

    const pokemonPromises = results.map((pokemon) => getPokemon(pokemon.name));

    const pokemonData = await Promise.all(pokemonPromises).then((res) => {
      return createHashMap(res, 'id');
    });

    const pokemonDescriptionPromises = results.map((pokemon) => getPokemonDescription(pokemon.name));

    const pokemonDataWithDescription = await Promise.all(pokemonDescriptionPromises).then((res) => {
      return res;
    });

    const pokemonDataNames = Object.keys(pokemonData);

    pokemonDataNames.forEach((pokemonName, index) => {
      pokemonData[pokemonName] = {
        ...pokemonData[pokemonName],
        description: pokemonDataWithDescription[index].flavor_text_entries[0].flavor_text
      };
    });

    const allPokemons = { ...pokemons, ...pokemonData };

    dispatch({ type: 'GET_POKEMONS', payload: allPokemons });
    dispatch({ type: 'FETCH_NEXT_POKEMON', payload: next });
  }, [state]);

  const handleFavoritedPokemons = useCallback(async () => {
    handleIsLoading(true);
    const results = JSON.parse(localStorage.getItem(pokemonStorageConstants.FAVORITE_POKEMON) || '');

    if (!results) return {};

    const pokemonPromises = results.map((pokemonId: number) => getPokemon(pokemonId));

    const pokemonData = await Promise.all(pokemonPromises).then((res) => {
      return createHashMap(res, 'id');
    });

    const pokemonDescriptionPromises = results.map((pokemonId: number) => getPokemonDescription(pokemonId));

    const pokemonDataWithDescription = await Promise.all(pokemonDescriptionPromises).then((res) => {
      return res;
    });

    const pokemonDataNames = Object.keys(pokemonData);

    pokemonDataNames.forEach((pokemonName, index) => {
      pokemonData[pokemonName] = {
        ...pokemonData[pokemonName],
        description: pokemonDataWithDescription[index].flavor_text_entries[0].flavor_text
      };
    });

    dispatch({ type: 'GET_FAVORITED_POKEMONS', payload: pokemonData });
    handleIsLoading(false);
    return {};
  }, [handleIsLoading]);

  const value = useMemo(
    () => ({
      handlePokemons,
      handleFavoritedPokemons,
      isLoading,
      handleIsLoading,
      state,
      handleNextPokemons
    }),
    [handleFavoritedPokemons, handleIsLoading, handleNextPokemons, handlePokemons, isLoading, state]
  );

  return <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>;
};

export { PokemonProvider };
