import './App.css';

import Routes from './Routes'
import { HashRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
