import { Button } from "./Button";
import { Form } from "./Form";

function EditSection({
  sectionTitle,
  sectionEntries,
  data,
  setData,
  handleInputOnChange,
}) {
  return (
    <section className="edit-section">
      <h3>{sectionTitle}</h3>
      {sectionEntries.map((entry) => {
        return (
          <Form
            key={entry.entryID}
            entry={entry}
            handleInputOnChange={handleInputOnChange}
            data={data}
            setData={setData}
          />
        );
      })}
      <Button
        type="add"
        buttonText={["add"]}
        sectionTitle={sectionTitle}
        data={data}
        setData={setData}
      />
    </section>
  );
}

export { EditSection };
