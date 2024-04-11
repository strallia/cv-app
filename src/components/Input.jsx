import { useState } from "react";

function Input({ inputLabel, handleInputChange, entryID }) {
  const [value, setValue] = useState("");

  if (inputLabel === "id") return;

  return (
    <div>
      <label htmlFor={inputLabel}>{inputLabel}</label>
      <input
        id={inputLabel}
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          handleInputChange(entryID, inputLabel, e.target.value);
        }}
      />
    </div>
  );
}

export { Input };
