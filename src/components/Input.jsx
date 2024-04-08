function Input({ label, value }) {
  return (
    <label>
      {label}
      <input
        id={label}
        type="text"
        value={value}
        onChange={() => console.log("changing input value")}
      />
    </label>
  );
}

export { Input };
