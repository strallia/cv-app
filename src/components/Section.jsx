import { Form } from "./Form";

function displayInteractiveForms(list, handleInputChange) {
  return (
    <>
      {list.map((formData, index) => {
        return (
          <Form
            key={index}
            formData={formData}
            handleInputChange={handleInputChange}
          />
        );
      })}
    </>
  );
}

function displayStaticContent(list) {
  return (
    <>
      {list.map((formData, formDataIndex) => {
        const values = Object.values(formData);

        // remove id property
        values.shift(0);

        const valuesInComponentForm = values.map((value, valueIndex) => (
          <p key={valueIndex}>{value}</p>
        ));

        return <div key={formDataIndex}>{valuesInComponentForm}</div>;
      })}
    </>
  );
}

function Section({ title, list, isForPreview = false, handleInputChange }) {
  return (
    <section className={isForPreview ? "preview-section" : "edit-section"}>
      <h3>{title}</h3>
      {isForPreview
        ? displayStaticContent(list)
        : displayInteractiveForms(list, handleInputChange)}
    </section>
  );
}

export { Section };
