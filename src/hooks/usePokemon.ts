import { usePokemonProvider } from './usePokemonProvider';

const usePokemon = () => {
  const { state } = usePokemonProvider();
  const { pokemons } = state;
  const pokemonKeysArr = Object.keys(pokemons || []);

  return { pokemonKeysArr };
};

export { usePokemon };
