import { useEffect, useRef } from 'react';
import { PokemonCard } from '../../components/pokemonCard/PokemonCard';
import { usePokemon } from '../../hooks/usePokemon';
import { usePokemonProvider } from '../../hooks/usePokemonProvider';
import { CardArea, Container } from './styles';

const Home = () => {
  const { handlePokemons, state, isLoading, handleNextPokemons } = usePokemonProvider();
  const { pokemons } = state;
  const { pokemonKeysArr } = usePokemon();
  const lastPokemonRef = useRef<HTMLDivElement>(null);

  // USE REF TO CONTROL IF THE COMPONENT CALL THE HANDLEPOKEMONS ONLY AT THE FIRST RENDER
  const calledOnce = useRef(false);

  useEffect(() => {
    if (calledOnce.current) {
      return;
    }
    if (Object.keys(pokemons!).length === 0) handlePokemons();
    calledOnce.current = true;
  }, [handlePokemons, pokemons]);

  /**
   * I TOOK THE OPPORTUNITY OF THE TEST TO CREATE AN INTERSECTION OBSERVER FOR INFINITY SCROOL OVER PAGINATION
   * OF COURSE IF IT WAS A REAL PROJECT I'LL NEVER DO THAT
   */

  return (
    <Container>
      <CardArea>
        {isLoading
          ? '...Loading'
          : pokemonKeysArr.map((pokemon, index) => {
              const isLastElement = index + 1 === pokemons![pokemon].id;
              if (isLastElement) {
                return (
                  <PokemonCard
                    pokemonInfo={pokemons![pokemon]}
                    key={pokemons![pokemon].id}
                    ref={lastPokemonRef}
                    arrLength={pokemonKeysArr.length}
                    onLastPokemon={handleNextPokemons}
                  />
                );
              }
              return <PokemonCard pokemonInfo={pokemons![pokemon]} key={pokemons![pokemon].id} />;
            })}
      </CardArea>
    </Container>
  );
};

export { Home };
