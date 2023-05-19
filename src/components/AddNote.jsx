import { AddNoteIcon } from '../icons/AddNoteIcon.jsx';

export const AddNote = () => {
  return (
    <a className="icon-button-add" href="/add">
      <AddNoteIcon />
      <span className="title-button">Add Note</span>
    </a>
  );
};
