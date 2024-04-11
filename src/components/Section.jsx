import { Form } from "./Form";

function displayInteractiveForms(title, list, handleInputChange) {
  return (
    <>
      <h3>{title}</h3>
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

function displayStaticContent(title, list) {
  const arrOfAllFormValues = list.map((entry) => {
    const values = Object.values(entry);

    // remove id property
    values.shift(0);

    return values;
  });

  // only show title if entries have data
  let hasTitle = arrOfAllFormValues.some((entry) => {
    const entryWithoutNulls = entry.filter((value) => value);
    return entryWithoutNulls.length > 0;
  });

  return (
    <>
      {hasTitle && <h3>{title}</h3>}
      {arrOfAllFormValues.map((entry, entryIndex) => {
        const entriesArr = entry.map((value, valueIndex) => {
          return <p key={valueIndex}>{value}</p>;
        });
        return <div key={entryIndex}>{entriesArr}</div>;
      })}
    </>
  );
}

function Section({ title, list, isForPreview = false, handleInputChange }) {
  return (
    <section className={isForPreview ? "preview-section" : "edit-section"}>
      {isForPreview
        ? displayStaticContent(title, list)
        : displayInteractiveForms(title, list, handleInputChange)}
    </section>
  );
}

export { Section };
