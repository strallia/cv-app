import { Form } from "./Form";

function EditSection({ title, sectionData, handleInputChange }) {
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
    </section>
  );
}

export { EditSection };
