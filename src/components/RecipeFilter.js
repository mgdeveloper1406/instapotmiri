import React, { useState } from "react";

const RecipeFilter = () => {
  const [filter, setFilter] = useState("");

  return (
    <div className="p-4 bg-red-700">
      <input
        type="text"
        placeholder="Search recipes..."
        className="p-2 rounded text-black"
        onChange={(e) => setFilter(e.target.value)}
      />
      <button className="ml-2">Apply Filter</button>
    </div>
  );
};

export default RecipeFilter;
