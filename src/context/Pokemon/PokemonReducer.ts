import { pokemonReducerConstants } from '../../constants/pokemonReducerConstants';
import { PokemonInfoReturn } from '../../types/pokemonTypes';

type State = {
  pokemons: PokemonInfoReturn | null;
  nextPokemons: string;
  favoritedPokemons: PokemonInfoReturn | null;
};

type Action = { type: keyof typeof pokemonReducerConstants; payload: any };

export const pokemonReducer = (state: State, action: Action) => {
  switch (action.type) {
    case pokemonReducerConstants.GET_POKEMONS: {
      return { ...state, pokemons: { ...action.payload } };
    }
    case pokemonReducerConstants.FETCH_NEXT_POKEMON: {
      return { ...state, nextPokemons: action.payload };
    }
    case pokemonReducerConstants.GET_FAVORITED_POKEMONS: {
      return { ...state, favoritedPokemons: { ...action.payload } };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};
