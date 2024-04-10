import { Button } from "./Button";
import { Input } from "./Input";

function Form({ formData, handleInputChange }) {
  const formID = formData.id;
  return (
    <form>
      {Object.entries(formData).map((input, index) => {
        const [label] = input;
        return (
          <Input
            key={index}
            formID={formID}
            label={label}
            handleInputChange={handleInputChange}
          />
        );
      })}
      <Button text="save" />
    </form>
  );
}

export { Form };
