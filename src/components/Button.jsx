function Button({
  text,
  title,
  sectionData,
  setSectionData,
  entryID,
  isVisible,
}) {
  if (title === "person") return;

  function handleAddButtonClick() {
    let keyNames =
      title === "education" ? ["degree", "school"] : ["jobTitle", "company"];
    keyNames.push("startYear", "endYear", "description");

    const newEntry = { id: crypto.randomUUID() };
    keyNames.forEach((key) => {
      newEntry[key] = null;
    });

    const sectionDataCopy = [...sectionData];
    sectionDataCopy.push(newEntry);
    setSectionData(sectionDataCopy);
  }

  function handleDeleteButtonClick() {
    const sectionDataCopy = [...sectionData];

    const indexOfEntryToDelete = sectionDataCopy.findIndex(
      (entry) => entry.id === entryID
    );
    sectionDataCopy.splice(indexOfEntryToDelete, 1);

    setSectionData(sectionDataCopy);
  }

  const onClickHandler =
    text === "add" ? handleAddButtonClick : handleDeleteButtonClick;

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onClickHandler();
      }}
    >
      {text}
    </button>
  );
}

export { Button };
