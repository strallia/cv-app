import { useState } from "react";
import { modifyEntry } from "../scripts/helperFunctions";
import { Button } from "./Button";
import { Input } from "./Input";

function Form({ entry, handleInputOnChange, data, setData }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const { entryID, degree, school, jobTitle, company } = entry;
  const modifiedEntry = modifyEntry(entry);
  const entryKeyValuePairs = Object.entries(modifiedEntry);

  function showCollapsedForm() {
    const buttonText = [degree, school, jobTitle, company];
    const textAsComponents = buttonText.map((string, index) => (
      <p key={index}>{string}</p>
    ));
    return (
      <div
        onClick={() => setIsCollapsed(false)}
        className="form--collapsed form--bg-color"
      >
        <div>{textAsComponents}</div>
        <Button type="delete" entryID={entryID} data={data} setData={setData} />
      </div>
    );
  }

  function showExpandedForm() {
    const arrOfInputs = entryKeyValuePairs.map((keyValuePair, index) => {
      const [key, value] = keyValuePair;
      return (
        <Input
          key={index}
          labelText={key}
          handleInputOnChange={handleInputOnChange}
          entryID={entryID}
          initialValue={value}
        />
      );
    });
    return (
      <div className="form--expanded form--bg-color">
        {arrOfInputs}
        <Button
          type="save"
          buttonText={["save"]}
          setIsCollapsed={setIsCollapsed}
        />
      </div>
    );
  }

  return <form>{isCollapsed ? showCollapsedForm() : showExpandedForm()}</form>;
}

export { Form };
