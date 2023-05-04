import { useState, useEffect } from 'react';
import { NoteCard } from '../components/NoteCard';
import { getAllNotes } from '../utils/local-data';
import { Navbar } from '../components/Navbar';

export const NotesPage = () => {
  const [notes, setNotes] = useState([]);
  const [page, setPage] = useState('allnotess');
  useEffect(() => {
    setNotes(getAllNotes());
  }, []);

  return (
    <>
      <Navbar setState={setNotes} setPage={setPage} />
      {notes.length === 0 ? (
        <p>Belum ada Catatan disini</p>
      ) : (
        <div className="mt2">
          {notes.map((note) => {
            return (
              <NoteCard
                note={note}
                key={note.id}
                setState={setNotes}
                page={page}
              />
            );
          })}
        </div>
      )}
    </>
  );
};
