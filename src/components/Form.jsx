import { modifyEntry } from "../scripts/helperFunctions";
import { Button } from "./Button";
import { Input } from "./Input";

function Form({ entry, handleInputOnChange, data, setData }) {
  const { entryID, sectionTitle } = entry;
  const modifiedEntry = modifyEntry(entry);
  const entryKeyNames = Object.keys(modifiedEntry);

  return (
    <form>
      {entryKeyNames.map((keyName, index) => {
        return (
          <Input
            key={index}
            labelText={keyName}
            handleInputOnChange={handleInputOnChange}
            entryID={entryID}
          />
        );
      })}
      {sectionTitle !== "person" && (
        <Button type="delete" entryID={entryID} data={data} setData={setData} />
      )}
      <Button type="save" />
    </form>
  );
}

export { Form };
