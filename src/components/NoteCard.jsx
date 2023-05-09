import { useNavigate } from 'react-router-dom';
import { archiveNote, unarchiveNote } from '../utils/local-data';
import { deleteNote } from '../utils/local-data';
import archivedActiveIcons from '../icons/archivedActive.svg';
import archivedNonActiveIcons from '../icons/archivedNonActive.svg';
import deleteNoteIcons from '../icons/deleteNote.svg';
import { showFormattedDate } from '../utils';
import {
  getAllNotes,
  getActiveNotes,
  getArchivedNotes,
} from '../utils/local-data';

export const NoteCard = ({ note, isDetail = false, setState, page }) => {
  const id = note.id;
  const title = note.title;
  const body = note.body;
  const createdAt = note.createdAt;
  const isArchived = note.archived;
  const date = showFormattedDate(createdAt);
  const navigate = useNavigate();
  const getNotes = (page) => {
    if (page === 'allnotes') return getAllNotes;
    if (page === 'active') return getActiveNotes;
    if (page === 'archive') return getArchivedNotes;
  };
  const toDetail = () => {
    navigate(`/${id}`);
  };
  const Archived = () => {
    return (
      <>
        <img
          className="icon-button"
          src={isArchived ? archivedActiveIcons : archivedNonActiveIcons}
          alt="simpan"
          onClick={
            isArchived
              ? () => {
                  console.log('tidak disimpan');
                  unarchiveNote(id);
                  setState(getNotes(page)());
                }
              : () => {
                  console.log('disimpan');
                  archiveNote(id);
                  setState(getNotes(page)());
                }
          }
        />
      </>
    );
  };
  const Delete = () => {
    return (
      <img
        className="icon-button"
        src={deleteNoteIcons}
        alt="hapus"
        onClick={() => {
          deleteNote(id);
          setState(getNotes(page));
        }}
      />
    );
  };
  return (
    <article>
      <div className="note-card">
        <div className="flex-between">
          <Archived />
          <Delete />
        </div>
        <h3
          className={isDetail ? 'note-title-detail' : 'note-title'}
          onClick={isDetail ? undefined : toDetail}
        >
          {title}
        </h3>
        <p className="note-date">{date}</p>
        <p className="note-body">{body}</p>
      </div>
    </article>
  );
};
