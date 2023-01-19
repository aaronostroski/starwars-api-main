import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';

import Home from './pages/Home';
import Search from './pages/Search';
import Details from './pages/Details';

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home />}  />
              <Route path="/search" element={<Search />} />
              <Route path="/details/:episode_id" element={<Details />}  />
          </Routes>
      </Router>
  );
}

export default App;
