import "../styles/App.css";
import { useState } from "react";
import { PreviewSection } from "./PreviewSection";
import { initialData } from "../scripts/initialData";
import { EditSection } from "./EditSection";

function App() {
  const [data, setData] = useState(initialData);
  const [expandedEditSection, setExpandedEditSection] = useState("");
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
              setData={setData}
              handleInputOnChange={handleInputOnChange}
              expandedEditSection={expandedEditSection}
              setExpandedEditSection={setExpandedEditSection}
            />
          );
        })}
      </div>
      <div className="preview-screen">
        <header className="preview-header">
          <h1 className="preview-header__title">
            {firstName} {lastName}
          </h1>
          <p className="preview-header__phone">{phone}</p>
          <p className="preview-header__email">{email}</p>
        </header>
        <div className="preview-sections-container">
          <PreviewSection title="education" sectionEntries={educationEntries} />
          <PreviewSection
            title="experience"
            sectionEntries={experienceEntries}
          />
        </div>
      </div>
      <footer>
        <span>
          created by <a href="https://github.com/strallia">strallia</a>
        </span>
      </footer>
    </>
  );
}

export default App;
