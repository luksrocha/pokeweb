/* eslint-disable camelcase */
export interface PokemonResults {
  name: string;
  url: string;
}

export interface Pokemon {
  next: string;
  previous: string;
  results: PokemonResults[];
}

export interface PokemonStats {
  base_stat: number;
  stat: {
    name: string;
  };
}

export interface PokemonTypes {
  slot: number;
  type: {
    name: string;
  };
}

export interface PokemonInfo {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  stats: PokemonStats[];
  types: PokemonTypes[];
  sprites: {
    front_default: string;
  };
  description: string;
}

export interface Descriptions {
  flavor_text: string;
}

export interface PokemonDescription {
  flavor_text_entries: Descriptions[];
}

export interface PokemonInfoWithDescription extends PokemonInfo {
  description: string;
}

export interface PokemonInfoReturn {
  [key: number | string]: PokemonInfoWithDescription;
}
