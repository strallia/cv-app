import { Section } from "./Section";
import { data } from "../data";
import "../styles/App.css";

function App() {
  const sectionTitles = Object.keys(data).map((title) => {
    return `${title.charAt(0).toUpperCase()}${title.slice(1)}`;
  });

  return (
    <>
      <h1>CV Builder</h1>
      <div className="edit-screen">
        EDIT SCREEN
        {sectionTitles.map((title) => {
          return <Section key={title} title={title} />;
        })}
      </div>
      <div className="preview-screen">PREVIEW SCREEN</div>
    </>
  );
}

export default App;
