import { Form } from "./Form";

function displayInteractiveForms(list) {
  return (
    <>
      {list.map((formData, index) => {
        return <Form key={index} formData={formData} />;
      })}
    </>
  );
}

function displayStaticContent(list) {
  return (
    <>
      {list.map((formData, formDataIndex) => {
        const values = Object.values(formData);
        const valuesAsComponents = values.map((value, valueIndex) => (
          <p key={valueIndex}>{value}</p>
        ));
        return <div key={formDataIndex}>{valuesAsComponents}</div>;
      })}
    </>
  );
}

function Section({ title, list, isForPreview = false }) {
  return (
    <section className={isForPreview ? "preview-section" : "edit-section"}>
      <h3>{title}</h3>
      {isForPreview
        ? displayStaticContent(list)
        : displayInteractiveForms(list)}
    </section>
  );
}

export { Section };
