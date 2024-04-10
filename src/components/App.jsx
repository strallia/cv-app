import { Section } from "./Section";
import { data } from "../data";
import "../styles/App.css";
import { useState } from "react";

function App() {
  const [personData, setPersonData] = useState(data.person);
  const [educationData, setEducationData] = useState(data.education);
  const [experienceData, setExperienceData] = useState(data.experience);

  const sectionTitles = Object.keys(data).map((title) => {
    return `${title.charAt(0).toUpperCase()}${title.slice(1)}`;
  });

  function handlePersonDataChange(id, key, newValue) {
    const updatedPersonData = [{ ...personData[id], [key]: newValue }];
    setPersonData(updatedPersonData);
    console.log(updatedPersonData);
  }

  function handleEducationDataChange(id, key, newValue) {
    const educationDataCopy = educationData;
    const updatedEducationData = educationDataCopy.map((obj) => {
      if (obj.id === id) obj[key] = newValue;
      return obj;
    });
    setEducationData(updatedEducationData);
    console.log(updatedEducationData);
  }

  function handleExperienceDataChange(id, key, newValue) {
    const experienceDataCopy = experienceData;
    const updatedExperienceData = experienceDataCopy.map((obj) => {
      if (obj.id === id) obj[key] = newValue;
      return obj;
    });
    setExperienceData(updatedExperienceData);
    console.log(updatedExperienceData);
  }

  return (
    <>
      <h1 className="header__title">CV Builder</h1>
      <div className="edit-screen">
        {sectionTitles.map((title) => {
          const formsList = data[title.toLowerCase()];

          let handleInputChange =
            title.toLowerCase() === "person"
              ? handlePersonDataChange
              : title.toLowerCase() === "education"
              ? handleEducationDataChange
              : handleExperienceDataChange;

          return (
            <Section
              key={title}
              title={title}
              list={formsList}
              handleInputChange={handleInputChange}
            />
          );
        })}
      </div>
      <div className="preview-screen">
        <header className="preview-screen__header">
          <h1>
            {personData[0].firstName} {personData[0].lastName}
          </h1>
          <p>{personData[0].phone}</p>
          <p>{personData[0].email}</p>
        </header>
        <Section title="education" list={educationData} isForPreview={true} />
        <Section title="experience" list={experienceData} isForPreview={true} />
      </div>
    </>
  );
}

export default App;
