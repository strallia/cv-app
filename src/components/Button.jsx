function Button({ text, title, sectionData, setSectionData, isVisible }) {
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

  function handleSaveButtonClick() {
    // TODO: write this save button handler function
  }

  const onClickHandler =
    text === "add" ? handleAddButtonClick : handleSaveButtonClick;

  return <button onClick={onClickHandler}>{text}</button>;
}

export { Button };
