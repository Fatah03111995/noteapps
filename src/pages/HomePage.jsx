import { useState, useEffect } from 'react';
import { getNoteByPage, searchNote } from '../utils/local-data';
import { Navbar } from '../components/Navbar';
import { useSearchParams } from 'react-router-dom';
import { NoteCardsWrapper } from '../components/NoteCardsWrapper';
import { AddNote } from '../components/AddNote';

export const HomePage = () => {
  const [notes, setNotes] = useState([]);
  const [foundedNotes, setFoundedNotes] = useState([]);
  const [page, setPage] = useState('allnotes');
  const [keyword, setKeyword] = useState('');
  const [keyParam, setKeyParam] = useSearchParams();

  useEffect(() => {
    setNotes(getNoteByPage(page));
    if (keyParam.get('title')) setKeyword(keyParam.get('title'));
    setFoundedNotes(searchNote(notes, keyword));
  }, [page, keyParam, keyword]);

  return (
    <>
      <Navbar setPage={setPage} />
      <main>
        <section className="menu-under-nav">
          <AddNote />
          <input
            type="text"
            placeholder="Cari berdasatkan title..."
            className="search"
            value={keyword}
            onChange={(e) => {
              setKeyword(e.target.value);
              setKeyParam({ title: e.target.value });
            }}
          />
        </section>
        {keyword === '' ? (
          <NoteCardsWrapper notes={notes} setNotes={setNotes} page={page} />
        ) : (
          <NoteCardsWrapper
            notes={foundedNotes}
            setNotes={setNotes}
            page={page}
          />
        )}
      </main>
    </>
  );
};
