import React from "react";
import "../App.css";

type Props = {
  categoryOptions: { label: string; value: string }[];
  typeOptions: { label: string; value: string }[];
  selectedCategory: string;
  selectedType: string;
  onFilterChange: (filters: Record<string, string>) => void;
  onResetFilters?: () => void; // new
};

const FiltersSidebar: React.FC<Props> = ({
  categoryOptions,
  typeOptions,
  selectedCategory,
  selectedType,
  onFilterChange,
  onResetFilters,
}) => {
  return (
    <div>
      <h3>Category</h3>
      {categoryOptions.map((c) => (
        <button
          key={c.value}
          className={selectedCategory === c.value ? "active" : ""}
          onClick={() => onFilterChange({ category: c.value })}
        >
          {c.label}
        </button>
      ))}

      <h3>Type</h3>
      {typeOptions.map((t) => (
        <button
          key={t.value}
          className={selectedType === t.value ? "active" : ""}
          onClick={() => onFilterChange({ type: t.value })}
        >
          {t.label}
        </button>
      ))}

      {onResetFilters && (
        <button
          style={{
            marginTop: "15px",
            backgroundColor: "#f87171", // red
            color: "#fff",
            width: "100%",
          }}
          onClick={onResetFilters}
        >
          Reset Filters
        </button>
      )}
    </div>
  );
};

export default FiltersSidebar;