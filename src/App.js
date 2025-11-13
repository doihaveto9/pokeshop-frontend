import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Components/HomePage/HomePage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="background" style={{
        backgroundImage: 'url(/Assets/PokemonCenterImage.jpeg)'/* relative to public folder in React */
    }}>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
