import './App.css';

import Routes from './Routes'
import { HashRouter as Router } from 'react-router-dom';
import Menu from './components/common/menu/Menu';

function App() {
  return (
    <div>
      <Router>
        <Menu />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
