import fire from '../../../assets/img/fire.png';
import fairy from '../../../assets/img/fairy.png';
import bug from '../../../assets/img/bug.png';
import dark from '../../../assets/img/dark.png';
import dragon from '../../../assets/img/dragon.png';
import electric from '../../../assets/img/electric.png';
import fighting from '../../../assets/img/fighting.png';
import flying from '../../../assets/img/flying.png';
import ghost from '../../../assets/img/ghost.png';
import grass from '../../../assets/img/grass.png';
import ground from '../../../assets/img/ground.png';
import ice from '../../../assets/img/ice.png';
import normal from '../../../assets/img/normal.png';
import poison from '../../../assets/img/poison.png';
import psychic from '../../../assets/img/psychic.png';
import rock from '../../../assets/img/rock.png';
import steel from '../../../assets/img/steel.png';
import water from '../../../assets/img/water.png';

interface IPokemonTypesImages {
  [key: string]: string;
}

const usePokemonCardImages = (pokemonType: string, secondPokemonType: string) => {
  const pokemonTyoesImages: IPokemonTypesImages = {
    normal,
    fighting,
    flying,
    poison,
    ground,
    rock,
    bug,
    ghost,
    steel,
    fire,
    water,
    grass,
    electric,
    psychic,
    ice,
    dragon,
    dark,
    fairy
  };

  const firstTypeImage = pokemonTyoesImages[pokemonType];
  const secondTypeImage = pokemonTyoesImages[secondPokemonType];

  return { firstTypeImage, secondTypeImage };
};

export { usePokemonCardImages };
