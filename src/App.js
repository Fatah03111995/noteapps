import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NotesPage } from './pages/NotesPage';
import { AddPage } from './pages/AddPage';
import { DetailPage } from './pages/DetailPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NotesPage />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
