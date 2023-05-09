import { useState, useEffect } from 'react';
import { NoteCard } from '../components/NoteCard';
import { getAllNotes } from '../utils/local-data';
import { Navbar } from '../components/Navbar';
import { FileEmpty } from './FileEmpty';

export const NotesPage = () => {
  const [notes, setNotes] = useState([]);
  const [page, setPage] = useState('allnotes');
  useEffect(() => {
    setNotes(getAllNotes());
  }, []);

  return (
    <>
      <Navbar setState={setNotes} setPage={setPage} />
      <main>
        <section className="search">untuk searching</section>
        {notes.length === 0 ? (
          <FileEmpty />
        ) : (
          <section className="mt2 note-container">
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
          </section>
        )}
      </main>
    </>
  );
};
