function PreviewSection({ title, sectionData }) {
  const entriesConvertedToValuesArr = sectionData.map((entry) => {
    const entryCopy = { ...entry };
    delete entryCopy.id;
    return Object.values(entryCopy);
  });

  // only show title if entries have data
  let hasTitle = entriesConvertedToValuesArr.some((entry) => {
    const entryWithoutNulls = entry.filter((value) => value);
    return entryWithoutNulls.length > 0;
  });

  return (
    <section className="preview-section">
      {hasTitle && <h3>{title}</h3>}
      {
        // display values in section
        entriesConvertedToValuesArr.map((entry, entryIndex) => {
          const valuesConvertedToComponents = entry.map((value, valueIndex) => {
            return <p key={valueIndex}>{value}</p>;
          });
          return <div key={entryIndex}>{valuesConvertedToComponents}</div>;
        })
      }
    </section>
  );
}

export { PreviewSection };
