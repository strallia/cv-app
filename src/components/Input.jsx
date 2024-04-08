function Input({ label, value }) {
  return (
    <label>
      {label}
      <input value={value} />
    </label>
  );
}

export { Input };
