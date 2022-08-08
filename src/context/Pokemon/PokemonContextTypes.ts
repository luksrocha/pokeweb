import { PokemonInfoReturn } from '../../types/pokemonTypes';

export interface PokemonContextTypes {
  handlePokemons: () => void;
  handleIsLoading: (value: boolean) => void;
  handleNextPokemons: () => void;
  handleFavoritedPokemons: () => void;
  isLoading: boolean;
  state: { pokemons: PokemonInfoReturn | null; nextPokemons: string; favoritedPokemons: PokemonInfoReturn | null };
}
