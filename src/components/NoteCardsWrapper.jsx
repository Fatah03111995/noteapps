import { NoteCard } from './NoteCard';
import { FileEmpty } from './FileEmpty';

export const NoteCardsWrapper = ({ notes, setNotes, page }) => {
  return (
    <>
      {notes.length === 0 ? (
        <FileEmpty />
      ) : (
        <section className="note-container">
          {notes.map((note) => {
            return (
              <NoteCard
                key={note.id}
                setState={setNotes}
                page={page}
                note={note}
              />
            );
          })}
        </section>
      )}
    </>
  );
};
