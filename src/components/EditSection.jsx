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
      <div className="forms-container--hide-overflow">
        <div className="forms-container forms-container--expand">
          {forms}
          <Button
            type="add"
            buttonText={["add"]}
            sectionTitle={sectionTitle}
            data={data}
            setData={setData}
            setExpandedEntryID={setExpandedEntryID}
          />
        </div>
      </div>
    );
  }

  function handleEditSectionClick() {
    // if section was already open, close it else open it
    if (expandedEditSection === sectionTitle) return setExpandedEditSection("");
    setExpandedEditSection(sectionTitle);

    // close all of its entries
    setExpandedEntryID("");
  }

  return (
    <div>
      <section
        className={`edit-section ${
          isExpandedSection ? "edit-section--expanded" : ""
        }`}
        onClick={handleEditSectionClick}
        tabIndex="0"
      >
        {sectionTitle}
      </section>
      {isExpandedSection && showExpandedSection()}
    </div>
  );
}

export { EditSection };
