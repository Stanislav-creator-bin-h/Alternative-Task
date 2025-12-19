import { memo } from "react";

const SearchBar = memo(function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <label style={{ display: "block" }}>
      <span className="visually-hidden">Пошук завдань</span>
      <input
        type="text"
        placeholder="Пошук…"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        aria-label="Пошук завдань"
      />
    </label>
  );
});

export default SearchBar;
