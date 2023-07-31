
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AnimeItem from './components/AnimeItem';
import Gallery from './components/Gallery';

function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/anime/:id" element={<AnimeItem />} />
    <Route path="/character/:id" element={<Gallery />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
