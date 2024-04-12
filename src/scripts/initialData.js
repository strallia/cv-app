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
    degree: "Degree 1",
    school: "Institution 1",
    startYear: null,
    endYear: null,
    description: null,
  },
  {
    entryID: crypto.randomUUID(),
    sectionTitle: "education",
    degree: "Degree 2",
    school: "Institution 2",
    startYear: null,
    endYear: null,
    description: null,
  },
  {
    entryID: crypto.randomUUID(),
    sectionTitle: "experience",
    jobTitle: "Job Title 1",
    company: "Company 1",
    startYear: null,
    endYear: null,
    description: null,
  },
];

export { initialData };
