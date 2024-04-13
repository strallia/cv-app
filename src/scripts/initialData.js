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
    school: "School 1",
    startYear: "(start)",
    endYear: "(end)",
    description: "description",
  },
  {
    entryID: crypto.randomUUID(),
    sectionTitle: "experience",
    jobTitle: "Job Title 1",
    company: "Company 1",
    startYear: "(start)",
    endYear: "(end)",
    description: "description",
  },
];

export { initialData };
