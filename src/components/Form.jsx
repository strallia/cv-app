function Form({ formData }) {
  return (
    <form>
      {Object.entries(formData).map((input, index) => {
        const label = input[0];
        const value = input[1];
        return (
          <label key={index}>
            {label}
            <input value={value} />
          </label>
        );
      })}
    </form>
  );
}

export { Form };
