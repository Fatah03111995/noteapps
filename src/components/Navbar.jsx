import { useNavigate } from 'react-router-dom';
import {
  getActiveNotes,
  getArchivedNotes,
  getAllNotes,
} from '../utils/local-data';
import { useState } from 'react';

export const Navbar = ({ setState, setPage }) => {
  const navigate = useNavigate();
  const [activeBtn, setActiveBtn] = useState('');
  const isActive = (id) => {
    if (activeBtn === id) return 'navbar-button-active';
    else return '';
  };
  return (
    <div className="flex-between navbar-container">
      <div
        onClick={() => {
          navigate('/');
        }}
        className="navbar-title"
      >
        MyNoteApps
      </div>
      <div className="flex-between" style={{ gap: '20px' }}>
        <div
          id="allnotes"
          className={`navbar-button ${isActive('allnotes')}`}
          onClick={(e) => {
            setPage('allnotes');
            setState(getAllNotes());
            setActiveBtn(e.target.id);
          }}
        >
          All Notes
        </div>
        <div
          id="active"
          className={`navbar-button ${isActive('active')}`}
          onClick={(e) => {
            setPage('active');
            setState(getActiveNotes());
            setActiveBtn(e.target.id);
          }}
        >
          Active
        </div>
        <div
          id="archive"
          className={`navbar-button ${isActive('archive')}`}
          onClick={(e) => {
            setPage('archive');
            setState(getArchivedNotes());
            setActiveBtn(e.target.id);
          }}
        >
          Archive
        </div>
      </div>
    </div>
  );
};
