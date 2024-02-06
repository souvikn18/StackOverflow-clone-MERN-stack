import { BrowserRouter as Router } from 'react-router-dom'

import './App.css';
import Navbar from './Components/Navabr/Navbar';
import AllRoutes from './AllRoutes';

function App() {
  return (
    <Router>
      <Navbar/>
      <AllRoutes/>
    </Router>
  );
}

export default App;
