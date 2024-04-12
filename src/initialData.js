const initialData = [
  {
    entryID: crypto.randomUUID(),
    sectionTitle: "person",
    firstName: "first",
    lastName: "last",
    phone: "(phone)",
    email: "(email)",
  },
  {
    entryID: crypto.randomUUID(),
    sectionTitle: "education",
    degree: null,
    school: null,
    startYear: null,
    endYear: null,
    description: null,
  },
  {
    entryID: crypto.randomUUID(),
    sectionTitle: "education",
    degree: null,
    school: null,
    startYear: null,
    endYear: null,
    description: null,
  },
  {
    entryID: crypto.randomUUID(),
    sectionTitle: "experience",
    jobTitle: null,
    company: null,
    startYear: null,
    endYear: null,
    description: null,
  },
];

export { initialData };
