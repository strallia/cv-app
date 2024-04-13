import { useState } from "react";
import { Button } from "./Button";
import { Form } from "./Form";

function EditSection({
  sectionTitle,
  sectionEntries,
  data,
  setData,
  handleInputOnChange,
  isExpandedSection,
  setExpandedEditSection,
}) {
  const [expandedEntryID, setExpandedEntryID] = useState("");

  function showExpandedSection() {
    const forms = sectionEntries.map((entry) => {
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
    });
    return (
      <>
        {forms}
        <Button
          type="add"
          buttonText={["add"]}
          sectionTitle={sectionTitle}
          data={data}
          setData={setData}
          setExpandedEntryID={setExpandedEntryID}
        />
      </>
    );
  }

  return (
    <section
      className="edit-section"
      onClick={() => setExpandedEditSection(sectionTitle)}
    >
      <h3>{sectionTitle}</h3>
      {isExpandedSection && showExpandedSection()}
    </section>
  );
}

export { EditSection };
