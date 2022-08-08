import axios from 'axios';
import { api } from '../services/api';
import { Pokemon, PokemonDescription, PokemonInfo } from '../types/pokemonTypes';

export const getPokemons = async (offset = 0, limit = 20): Promise<Pokemon> => {
  try {
    const response = await api.get('/pokemon', {
      params: {
        offset,
        limit
      }
    });
    return response.data;
  } catch (err) {
    throw new Error('Could not get pokemons');
  }
};

export const getPokemon = async (name: string | number): Promise<PokemonInfo> => {
  try {
    const response = await api.get(`pokemon/${name}`);
    return response.data;
  } catch (error) {
    throw new Error('Could not get pokemon');
  }
};

export const getNextPokemons = async (url: string): Promise<Pokemon> => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    throw new Error('Could not get pokemons');
  }
};

export const getPokemonDescription = async (name: string | number): Promise<PokemonDescription> => {
  try {
    const response = await api.get(`pokemon-species/${name}`);
    return response.data;
  } catch (error) {
    throw new Error('Could not get the pokemon description');
  }
};
