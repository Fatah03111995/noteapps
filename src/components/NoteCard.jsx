import { useNavigate } from 'react-router-dom';
import { archiveNote, unarchiveNote } from '../utils/local-data';
import { deleteNote } from '../utils/local-data';
import archivedActiveIcons from '../icons/archivedActive.svg';
import archivedNonActiveIcons from '../icons/archivedNonActive.svg';
import deleteNoteIcons from '../icons/deleteNote.svg';
import { showFormattedDate } from '../utils';
import { getNoteByPage } from '../utils/local-data';

export const NoteCard = ({ note, isDetail = false, setState, page }) => {
  const id = note.id;
  const title = note.title;
  const body = note.body;
  const createdAt = note.createdAt;
  const isArchived = note.archived;
  const date = showFormattedDate(createdAt);
  const navigate = useNavigate();

  const toDetail = () => {
    navigate(`/detail/${id}`);
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
                  unarchiveNote(id);
                  setState(getNoteByPage(page));
                }
              : () => {
                  archiveNote(id);
                  setState(getNoteByPage(page));
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
          setState(getNoteByPage(page));
        }}
      />
    );
  };
  return (
    <article>
      <div className={isDetail ? 'note-card-detail' : 'note-card'}>
        <div className="flex-between" style={{ height: '2rem' }}>
          <Archived />
          <Delete />
        </div>
        <h3
          className={isDetail ? 'note-title-detail' : 'note-title'}
          onClick={isDetail ? undefined : toDetail}
        >
          {title}
        </h3>
        <p className={isDetail ? 'note-date-detail' : 'note-date'}>{date}</p>
        <p className={isDetail ? 'note-body-detail' : 'note-body'}>{body}</p>
      </div>
    </article>
  );
};
