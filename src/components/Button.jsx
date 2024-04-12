function Button({
  type,
  data,
  setData,
  sectionTitle,
  entryID,
  setIsCollapsed,
}) {
  function handleAddButtonClick() {
    let keyNames =
      sectionTitle === "education"
        ? ["degree", "school"]
        : ["jobTitle", "company"];
    keyNames.push("startYear", "endYear", "description");

    const newEntry = { entryID: crypto.randomUUID(), sectionTitle };
    keyNames.forEach((key) => (newEntry[key] = null));

    const dataCopy = [...data];
    dataCopy.push(newEntry);
    setData(dataCopy);
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
    // collapse form
    setIsCollapsed(true);
  }

  function handleEditButtonClick() {
    // expand form
    setIsCollapsed(false);
  }

  let onClickHandler;
  if (type === "add") onClickHandler = handleAddButtonClick;
  else if (type === "delete") onClickHandler = handleDeleteButtonClick;
  else if (type === "save") onClickHandler = handleSaveButtonClick;
  else if (type === "edit") onClickHandler = handleEditButtonClick;

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
