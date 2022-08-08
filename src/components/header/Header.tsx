import { useNavigate } from 'react-router-dom';
import { Container, Menu, MenuItem, Nav } from './styles';

const Header = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  };
  const navigateToFavorites = () => {
    navigate('/pokemon/favorites');
  };

  return (
    <Container>
      Header
      <Nav>
        <Menu>
          <MenuItem onClick={navigateToHome}>Home</MenuItem>
          <MenuItem onClick={navigateToFavorites}>Favorites</MenuItem>
        </Menu>
      </Nav>
    </Container>
  );
};

export { Header };
