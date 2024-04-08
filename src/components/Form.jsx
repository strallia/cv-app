import { Input } from "./Input";

function Form({ formData }) {
  return (
    <form>
      {Object.entries(formData).map((input, index) => {
        const [label, value] = input;
        return <Input key={index} label={label} value={value} />;
      })}
    </form>
  );
}

export { Form };
