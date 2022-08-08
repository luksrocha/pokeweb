import { useEffect, useRef } from 'react';
import { PokemonCard } from '../../components/pokemonCard/PokemonCard';
import { useFavoritedPokemons } from '../../hooks/useFavoritedPokemons';
import { usePokemonProvider } from '../../hooks/usePokemonProvider';
import { CardArea, Container } from './styles';

const FavoritedPokemonsPage = () => {
  const { handleFavoritedPokemons, state, isLoading } = usePokemonProvider();
  const { pokemonKeysArr } = useFavoritedPokemons();
  const lastPokemonRef = useRef<HTMLDivElement>(null);

  const { favoritedPokemons } = state;

  useEffect(() => {
    handleFavoritedPokemons();
  }, [handleFavoritedPokemons]);

  return (
    <Container>
      <CardArea>
        {isLoading
          ? '...Loading'
          : pokemonKeysArr.map((pokemon) => (
              <PokemonCard ref={lastPokemonRef} pokemonInfo={favoritedPokemons![pokemon]} key={favoritedPokemons![pokemon].id} />
            ))}
      </CardArea>
    </Container>
  );
};

export { FavoritedPokemonsPage };
