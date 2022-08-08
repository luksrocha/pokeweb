import { PokemonTypes } from '../types/pokemonTypes';

const usePokemonTypes = (types: PokemonTypes[]) => {
  const primaryType = types[0]?.type.name;
  const secondaryType = types[1]?.type.name;

  return { primaryType, secondaryType };
};

export { usePokemonTypes };
