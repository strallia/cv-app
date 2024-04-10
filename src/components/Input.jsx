import { useState } from "react";

function Input({ formID, label, handleInputChange }) {
  const [value, setValue] = useState("");

  if (label === "id") return;

  return (
    <div>
      <label htmlFor={label}> {label}</label>
      <input
        id={label}
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          handleInputChange(formID, label, e.target.value);
        }}
      />
    </div>
  );
}

export { Input };
