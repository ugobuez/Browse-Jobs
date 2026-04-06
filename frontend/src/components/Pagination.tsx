import React from "react";
import "../App.css";

type Props = {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<Props> = ({ page, totalPages, onPageChange }) => {
  return (
    <div className="pagination">
      <button onClick={() => onPageChange(page - 1)} disabled={page <= 1}>
        Prev
      </button>

      <span>
        Page {page} of {totalPages}
      </span>

      <button onClick={() => onPageChange(page + 1)} disabled={page >= totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;