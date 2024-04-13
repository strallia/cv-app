import { useState } from "react";

function Input({ labelText, handleInputOnChange, entryID, initialValue }) {
  const validInitialValue = initialValue ? initialValue : "";
  const [value, setValue] = useState(validInitialValue);

  function convertCamelToTitleCase(string) {
    let arr = string.split(/(?=[A-Z])/);
    arr[0] = arr[0].charAt(0).toUpperCase() + arr[0].slice(1);
    return arr.join(" ");
  }

  if (labelText === "id") return;

  return (
    <div className="input-container">
      <label htmlFor={labelText}>{convertCamelToTitleCase(labelText)}</label>
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
