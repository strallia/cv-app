function Button({
  type,
  data,
  setData,
  sectionTitle,
  entryID,
  setExpandedEntryID,
}) {
  function handleAddButtonClick() {
    let keyNames =
      sectionTitle === "education"
        ? ["degree", "school"]
        : ["jobTitle", "company"];
    keyNames.push("startYear", "endYear", "description");

    const newEntry = { entryID: crypto.randomUUID(), sectionTitle };
    keyNames.forEach((key) => (newEntry[key] = null));

    const updatedData = [...data, newEntry];
    setData(updatedData);
    setExpandedEntryID(newEntry.entryID);
  }

  function handleDeleteButtonClick() {
    const dataCopy = [...data];

    const indexOfEntryToDelete = dataCopy.findIndex(
      (entry) => entry.entryID === entryID
    );
    dataCopy.splice(indexOfEntryToDelete, 1);

    setData(dataCopy);
  }

  function handleSaveButtonClick() {
    // collapse all forms
    setExpandedEntryID("");
  }

  let onClickHandler;
  if (type === "add") onClickHandler = handleAddButtonClick;
  else if (type === "delete") onClickHandler = handleDeleteButtonClick;
  else if (type === "save") onClickHandler = handleSaveButtonClick;

  if (sectionTitle === "person") return;

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onClickHandler();
      }}
    >
      {type}
    </button>
  );
}

export { Button };
