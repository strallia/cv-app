import { Button } from "./Button";
import { Input } from "./Input";

function Form({ entry, handleInputChange }) {
  const entryID = entry.id;
  return (
    <form>
      {Object.keys(entry).map((inputLabel, index) => {
        return (
          <Input
            key={index}
            inputLabel={inputLabel}
            handleInputChange={handleInputChange}
            entryID={entryID}
          />
        );
      })}
      <Button text="save" />
    </form>
  );
}

export { Form };
