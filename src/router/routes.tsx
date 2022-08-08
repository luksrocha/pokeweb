import { Route, Routes } from 'react-router-dom';

import { Home } from '../pages/home/Home';
import { PokemonDetailsPage } from '../pages/pokemonDetails/PokemonDetailsPage';
import { FavoritedPokemonsPage } from '../pages/favoritedPokemons/FavoritedPokemonsPage';

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/pokemon/:pokemonID" element={<PokemonDetailsPage />} />
    <Route path="/pokemon/favorites" element={<FavoritedPokemonsPage />} />
  </Routes>
);
export { Router };
