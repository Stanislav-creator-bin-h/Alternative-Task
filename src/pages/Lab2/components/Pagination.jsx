import { memo } from "react";

const Pagination = memo(function Pagination({
  currentPage,
  totalTodos,
  limit,
  onNext,
  onPrev,
}) {
  const totalPages = Math.ceil(totalTodos / limit);

  if (totalPages <= 1) return null;

  return (
    <nav aria-label="Пагінація" style={{ marginTop: "16px" }}>
      <button onClick={onPrev} disabled={currentPage === 1}>
        ← Попередня
      </button>

      <span style={{ margin: "0 12px" }}>
        Сторінка {currentPage} з {totalPages}
      </span>

      <button onClick={onNext} disabled={currentPage === totalPages}>
        Наступна →
      </button>
    </nav>
  );
});

export default Pagination;
