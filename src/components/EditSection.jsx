import { useState } from "react";
import { Button } from "./Button";
import { Form } from "./Form";

function EditSection({
  sectionTitle,
  sectionEntries,
  data,
  setData,
  handleInputOnChange,
  expandedEditSection,
  setExpandedEditSection,
}) {
  const [expandedEntryID, setExpandedEntryID] = useState("");
  const isExpandedSection = sectionTitle === expandedEditSection;

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

  function handleEditSectionClick(e) {
    if (e.target !== e.currentTarget) return;
    if (expandedEditSection === sectionTitle) return setExpandedEditSection("");
    setExpandedEditSection(sectionTitle);
  }

  return (
    <button
      className="edit-section"
      onClick={(e) => handleEditSectionClick(e)}
      tabIndex="0"
    >
      {sectionTitle}
      {isExpandedSection && showExpandedSection()}
    </button>
  );
}

export { EditSection };
