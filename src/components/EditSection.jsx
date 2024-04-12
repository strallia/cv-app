import { Button } from "./Button";
import { Form } from "./Form";

function EditSection({
  title,
  sectionData,
  setSectionData,
  handleInputChange,
}) {
  return (
    <section className="edit-section">
      <h3>{title}</h3>
      {sectionData.map((entry) => {
        return (
          <Form
            key={entry.id}
            entry={entry}
            handleInputChange={handleInputChange}
            sectionData={sectionData}
            setSectionData={setSectionData}
            title={title}
          />
        );
      })}
      <Button
        text="add"
        title={title}
        sectionData={sectionData}
        setSectionData={setSectionData}
      />
    </section>
  );
}

export { EditSection };
