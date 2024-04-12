import { modifyEntry } from "../scripts/helperFunctions";

function PreviewSection({ title, sectionEntries }) {
  const modifiedEntries = sectionEntries.map((entry) => modifyEntry(entry));

  // show title if at least one value amongst all entries is not null
  const showTitle = modifiedEntries.some((entry) => {
    const values = Object.values(entry);
    return values.some((value) => value !== null);
  });

  return (
    <section className="preview-section">
      {showTitle && <h3>{title}</h3>}
      {
        // display values in each section
        sectionEntries.map((entry) => {
          const modifiedEntry = modifyEntry(entry);
          const values = Object.values(modifiedEntry);
          const valuesAsComponents = values.map((value, index) => {
            return <p key={index}>{value}</p>;
          });
          return <div key={entry.entryID}>{valuesAsComponents}</div>;
        })
      }
    </section>
  );
}

export { PreviewSection };
