import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const Navbar = ({ setPage }) => {
  const navigate = useNavigate();
  const [activeBtn, setActiveBtn] = useState('');
  const isActive = (id) => {
    if (activeBtn === id) return 'navbar-button-active';
    else return '';
  };

  return (
    <header className="flex-between navbar-container">
      <nav
        onClick={() => {
          navigate('/');
        }}
        className="navbar-title"
      >
        MyNoteApps
      </nav>
      <nav className="flex-between" style={{ gap: '20px' }}>
        <li
          id="allnotes"
          className={`navbar-button ${isActive('allnotes')}`}
          onClick={(e) => {
            setPage('allnotes');
            setActiveBtn(e.target.id);
          }}
        >
          All Notes
        </li>
        <li
          id="active"
          className={`navbar-button ${isActive('active')}`}
          onClick={(e) => {
            setPage('active');
            setActiveBtn(e.target.id);
          }}
        >
          Active
        </li>
        <li
          id="archive"
          className={`navbar-button ${isActive('archive')}`}
          onClick={(e) => {
            setPage('archive');
            setActiveBtn(e.target.id);
          }}
        >
          Archive
        </li>
      </nav>
    </header>
  );
};
