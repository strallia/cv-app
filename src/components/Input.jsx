import { useState } from "react";

function Input({ labelText, handleInputOnChange, entryID, initialValue }) {
  const [value, setValue] = useState(initialValue);

  if (labelText === "id") return;

  return (
    <div>
      <label htmlFor={labelText}>{labelText}</label>
      <input
        id={labelText}
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          handleInputOnChange(entryID, labelText, e.target.value);
        }}
      />
    </div>
  );
}

export { Input };
