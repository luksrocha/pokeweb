import { usePokemonProvider } from './usePokemonProvider';

const useFavoritedPokemons = () => {
  const { state } = usePokemonProvider();
  const { favoritedPokemons } = state;
  const pokemonKeysArr = Object.keys(favoritedPokemons || []);

  return { pokemonKeysArr };
};

export { useFavoritedPokemons };
