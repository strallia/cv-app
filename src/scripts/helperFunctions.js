function modifyEntry(entry) {
  const modifiedEntry = { ...entry };
  delete modifiedEntry.entryID;
  delete modifiedEntry.sectionTitle;
  return modifiedEntry;
}

export { modifyEntry };
