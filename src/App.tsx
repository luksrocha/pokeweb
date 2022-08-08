import { Header } from './components/header/Header';
import { Router } from './router/routes';

const App = () => {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Header />
      <Router />
    </div>
  );
};

export default App;
