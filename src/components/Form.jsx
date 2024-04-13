import { modifyEntry } from "../scripts/helperFunctions";
import { Button } from "./Button";
import { Input } from "./Input";

function Form({
  entry,
  handleInputOnChange,
  data,
  setData,
  isExpanded,
  setExpandedEntryID,
}) {
  const { entryID, sectionTitle, degree, school, jobTitle, company } = entry;
  const modifiedEntry = modifyEntry(entry);
  const entryKeyValuePairs = Object.entries(modifiedEntry);

  function showCollapsedForm() {
    let buttonText = [degree, school, jobTitle, company].filter(
      (string) => string
    );
    const textAsComponents = buttonText.map((string, index) => (
      <p key={index}>{string}</p>
    ));
    return (
      <div
        onClick={() => setExpandedEntryID(entryID)}
        className="form form--collapsed form--bg-color"
        tabIndex="0"
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
      <div className="form form--expanded form--bg-color">
        {arrOfInputs}
        {sectionTitle !== "person" && (
          <Button
            type="save"
            buttonText={["save"]}
            setExpandedEntryID={setExpandedEntryID}
          />
        )}
      </div>
    );
  }

  if (sectionTitle === "person") return showExpandedForm();

  return <form>{isExpanded ? showExpandedForm() : showCollapsedForm()}</form>;
}

export { Form };
