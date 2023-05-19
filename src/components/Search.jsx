import { SearchIcon } from '../icons/SearchIcon';

export const Search = ({ keyword, setKeyword, setKeyParam }) => {
  return (
    <div className="icon-button-add">
      <SearchIcon />
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
    </div>
  );
};
