import "../styles/CVApp.css";
import GenInfoDisplay from "./GenInfoDisplay";
import PracExpDisplay from "./PracExpDisplay";

function CVApp({ state }) {

  return (
    <div className="cv-container">
      <GenInfoDisplay generalInfo={state.generalInformation} />
      <PracExpDisplay practicalExperience={state.practicalExperience} />
    </div>
  );
}

export default CVApp;