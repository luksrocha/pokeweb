/* eslint-disable no-console */
import { useState } from 'react';
import { getPokemon, getPokemonDescription } from '../api/pokemon';
import { PokemonInfoWithDescription } from '../types/pokemonTypes';
import { usePokemonProvider } from './usePokemonProvider';

const useSelectedPokemonData = (id: string) => {
  const { state } = usePokemonProvider();
  const { pokemons } = state;

  // const getPokemonData = async () => {
  //   try {
  //     const pokemonResults = await getPokemon(id);
  //     const pokemonDescription = await getPokemonDescription(id);
  //     return {
  //       ...pokemonResults,
  //       description: pokemonDescription.flavor_text_entries[0].flavor_text
  //     } as PokemonInfoWithDescription;
  //   } catch (error) {
  //     return {} as PokemonInfoWithDescription;
  //   }
  // };

  if (!pokemons) return {} as PokemonInfoWithDescription;

  const selectedPokemon = pokemons[id];

  return selectedPokemon;
};

export { useSelectedPokemonData };
