import { useState } from "react";
import { Button } from "./Button";
import { Form } from "./Form";

function EditSection({
  sectionTitle,
  sectionEntries,
  data,
  setData,
  handleInputOnChange,
}) {
  const [expandedEntryID, setExpandedEntryID] = useState("");

  return (
    <section className="edit-section">
      <h3>{sectionTitle}</h3>
      {sectionEntries.map((entry) => {
        const isExpanded = entry.entryID === expandedEntryID;
        return (
          <Form
            key={entry.entryID}
            entry={entry}
            handleInputOnChange={handleInputOnChange}
            data={data}
            setData={setData}
            isExpanded={isExpanded}
            setExpandedEntryID={setExpandedEntryID}
          />
        );
      })}
      <Button
        type="add"
        buttonText={["add"]}
        sectionTitle={sectionTitle}
        data={data}
        setData={setData}
        setExpandedEntryID={setExpandedEntryID}
      />
    </section>
  );
}

export { EditSection };
