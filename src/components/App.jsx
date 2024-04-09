import { Section } from "./Section";
import { data } from "../data";
import "../styles/App.css";

function App() {
  const sectionTitles = Object.keys(data).map((title) => {
    return `${title.charAt(0).toUpperCase()}${title.slice(1)}`;
  });

  const personData = data.person[0];

  return (
    <>
      <h1 className="header__title">CV Builder</h1>
      <div className="edit-screen">
        {sectionTitles.map((title) => {
          const formsList = data[title.toLowerCase()];
          return <Section key={title} title={title} list={formsList} />;
        })}
      </div>
      <div className="preview-screen">
        <header className="preview-screen__header">
          <h1>
            {personData.firstName} {personData.lastName}
          </h1>
          <p>{personData.phone}</p>
          <p>{personData.email}</p>
        </header>
        <Section title="education" list={data.education} isForPreview={true} />
        <Section
          title="experience"
          list={data.experience}
          isForPreview={true}
        />
      </div>
    </>
  );
}

export default App;
