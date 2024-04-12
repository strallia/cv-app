import "../styles/App.css";
import { useState } from "react";
import { PreviewSection } from "./PreviewSection";
import { person, education, experience } from "../data";
import { EditSection } from "./EditSection";

function App() {
  const [personData, setPersonData] = useState(person);
  const [educationData, setEducationData] = useState(education);
  const [experienceData, setExperienceData] = useState(experience);

  const sectionTitles = ["person", "education", "experience"];

  function handlePersonDataChange(_, key, newValue) {
    const updatedPersonData = [{ ...personData[0], [key]: newValue }];
    setPersonData(updatedPersonData);
  }

  function handleEducationDataChange(entryID, key, newValue) {
    const educationDataCopy = [...educationData];
    const updatedEducationData = educationDataCopy.map((obj) => {
      if (obj.id === entryID) obj[key] = newValue;
      return obj;
    });
    console.log(educationDataCopy[0].id);
    setEducationData(updatedEducationData);
  }

  function handleExperienceDataChange(entryID, key, newValue) {
    const experienceDataCopy = [...experienceData];
    const updatedExperienceData = experienceDataCopy.map((obj) => {
      if (obj.id === entryID) obj[key] = newValue;
      return obj;
    });
    setExperienceData(updatedExperienceData);
  }

  return (
    <>
      <h1 className="header__title">CV Builder</h1>
      <div className="edit-screen">
        {sectionTitles.map((title) => {
          let sectionData;
          let setSectionData;
          let handleInputChange;

          if (title === "person") {
            sectionData = personData;
            setSectionData = setPersonData;
            handleInputChange = handlePersonDataChange;
          } else if (title === "education") {
            sectionData = educationData;
            setSectionData = setEducationData;
            handleInputChange = handleEducationDataChange;
          } else if (title === "experience") {
            sectionData = experienceData;
            setSectionData = setExperienceData;
            handleInputChange = handleExperienceDataChange;
          }

          return (
            <EditSection
              key={title}
              title={title}
              sectionData={sectionData}
              setSectionData={setSectionData}
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
        <PreviewSection title="education" sectionData={educationData} />
        <PreviewSection title="experience" sectionData={experienceData} />
      </div>
    </>
  );
}

export default App;
