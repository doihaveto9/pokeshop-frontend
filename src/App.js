import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Components/HomePage/HomePage';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="background">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
