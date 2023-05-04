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
          className="detailIcons"
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
        className="detailIcons"
        src={deleteNoteIcons}
        alt="hapus"
        onClick={() => {
          deleteNote(id);
          setState(getAllNotes());
        }}
      />
    );
  };
  return (
    <>
      <div className="noteCard">
        <Archived />
        <Delete />
        <p
          className={isDetail ? 'noteTitle' : 'noteTitleDetail'}
          onClick={isDetail ? toDetail : undefined}
        >
          {title}
        </p>
        <p className="noteDate">{date}</p>
        <p className="noteBody">{body}</p>
      </div>
    </>
  );
};
