import { useContext } from 'react';
import { PokemonContext } from '../context/Pokemon/PokemonContext';
import { PokemonContextTypes } from '../context/Pokemon/PokemonContextTypes';

export const usePokemonProvider = (): PokemonContextTypes => {
  const { handlePokemons, handleIsLoading, isLoading, state, handleNextPokemons, handleFavoritedPokemons } =
    useContext(PokemonContext);

  return {
    handlePokemons,
    handleIsLoading,
    isLoading,
    state,
    handleNextPokemons,
    handleFavoritedPokemons
  };
};
