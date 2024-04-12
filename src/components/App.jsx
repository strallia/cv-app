import "../styles/App.css";
import { useState } from "react";
import { PreviewSection } from "./PreviewSection";
import { initialData } from "../initialData";
import { EditSection } from "./EditSection";

function App() {
  const [data, setData] = useState(initialData);

  const sectionTitles = ["person", "education", "experience"];

  function findSectionEntries(sectionTitle) {
    return data.filter((entry) => entry.sectionTitle === sectionTitle);
  }
  const personEntries = findSectionEntries("person");
  const educationEntries = findSectionEntries("education");
  const experienceEntries = findSectionEntries("experience");

  const { firstName, lastName, phone, email } = personEntries[0];

  function handleInputOnChange(entryID, key, newValue) {
    const dataCopy = [...data];
    const updatedData = dataCopy.map((entry) => {
      if (entry.entryID === entryID) entry[key] = newValue;
      return entry;
    });
    setData(updatedData);
  }

  return (
    <>
      <h1 className="header__title">CV Builder</h1>
      <div className="edit-screen">
        {sectionTitles.map((sectionTitle, index) => {
          let sectionEntries;
          if (sectionTitle === "person") sectionEntries = personEntries;
          else if (sectionTitle === "education")
            sectionEntries = educationEntries;
          else if (sectionTitle === "experience")
            sectionEntries = experienceEntries;
          return (
            <EditSection
              key={index}
              sectionTitle={sectionTitle}
              sectionEntries={sectionEntries}
              data={data}
              setData={setData}
              handleInputOnChange={handleInputOnChange}
            />
          );
        })}
      </div>
      <div className="preview-screen">
        <header className="preview-screen__header">
          <h1>
            {firstName} {lastName}
          </h1>
          <p>{phone}</p>
          <p>{email}</p>
        </header>
        <PreviewSection title="education" sectionEntries={educationEntries} />
        <PreviewSection title="experience" sectionEntries={experienceEntries} />
      </div>
    </>
  );
}

export default App;
