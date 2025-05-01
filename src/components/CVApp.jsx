import "../styles/CVApp.css";
import GenInfoDisplay from "./GenInfoDisplay";

function CVApp({ state }) {

  return (
    <div className="cv-container">
      {/* Should there be components for each section? */}
      <GenInfoDisplay generalInfo={state.generalInformation} />
    </div>
  );
}

export default CVApp;