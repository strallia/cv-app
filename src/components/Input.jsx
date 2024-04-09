function Input({ label, value }) {
  return (
    <div>
      <label htmlFor={label}> {label}</label>
      <input
        id={label}
        type="text"
        value={value}
        onChange={() => console.log("changing input value")}
      />
    </div>
  );
}

export { Input };
