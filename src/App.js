import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AddPage } from './pages/AddPage';
import { DetailPage } from './pages/DetailPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
