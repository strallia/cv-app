import { Button } from "./Button";
import { Input } from "./Input";

function Form({
  entry,
  handleInputChange,
  sectionData,
  setSectionData,
  title,
}) {
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
      {title !== "person" && (
        <Button
          text="delete"
          entryID={entryID}
          sectionData={sectionData}
          setSectionData={setSectionData}
        />
      )}
      <Button text="save" />
    </form>
  );
}

export { Form };
