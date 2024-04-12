import { useState } from "react";
import { modifyEntry } from "../scripts/helperFunctions";
import { Button } from "./Button";
import { Input } from "./Input";

function Form({ entry, handleInputOnChange, data, setData }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const { entryID, sectionTitle } = entry;
  const modifiedEntry = modifyEntry(entry);
  const entryKeyValuePairs = Object.entries(modifiedEntry);

  function showCollapsedView(key, value, index) {
    if (
      key === "degree" ||
      key === "school" ||
      key === "jobTitle" ||
      key === "company"
    ) {
      return <p key={index}>{value}</p>;
    }
  }

  function showExpandedView(key, value, index) {
    return (
      <Input
        key={index}
        labelText={key}
        handleInputOnChange={handleInputOnChange}
        entryID={entryID}
        initialValue={value}
      />
    );
  }

  return (
    <form>
      {entryKeyValuePairs.map((keyValuePair, index) => {
        const [key, value] = keyValuePair;
        return isCollapsed
          ? showCollapsedView(key, value, index)
          : showExpandedView(key, value, index);
      })}
      {isCollapsed && (
        <div>
          {sectionTitle !== "person" && (
            <Button
              type="delete"
              entryID={entryID}
              data={data}
              setData={setData}
            />
          )}
          <Button type="edit" setIsCollapsed={setIsCollapsed} />
        </div>
      )}
      {!isCollapsed && <Button type="save" setIsCollapsed={setIsCollapsed} />}
    </form>
  );
}

export { Form };
