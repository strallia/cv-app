import { Form } from "./Form";

function Section({ title, formsList }) {
  return (
    <section>
      <h3>{title}</h3>
      {formsList.map((formData, index) => {
        return <Form key={index} formData={formData} />;
      })}
    </section>
  );
}

export { Section };
