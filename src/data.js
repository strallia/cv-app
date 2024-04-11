const person = [
  {
    id: crypto.randomUUID(),
    firstName: null,
    lastName: null,
    phone: null,
    email: null,
  },
];

const education = [
  {
    id: crypto.randomUUID(),
    degree: null,
    school: null,
    startYear: null,
    endYear: null,
    description: null,
  },
  {
    id: crypto.randomUUID(),
    degree: null,
    school: null,
    startYear: null,
    endYear: null,
    description: null,
  },
];

const experience = [
  {
    id: crypto.randomUUID(),
    jobTitle: null,
    company: null,
    startYear: null,
    endYear: null,
    description: null,
  },
];

export { person, education, experience };
