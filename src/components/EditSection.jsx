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
      {sectionData.map((entry, index) => {
        return (
          <Form
            key={index}
            entry={entry}
            handleInputChange={handleInputChange}
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
