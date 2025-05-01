import "../styles/CVApp.css";
import GenInfoDisplay from "./GenInfoDisplay";
import ExperienceDisplay from "./ExperienceDisplay";
import { educationalInfo, practicalInfo } from "../constants";

function CVApp({ state }) {
  return (
    <div className="cv-container">
      <GenInfoDisplay generalInfo={state.generalInformation} />
      <ExperienceDisplay
        experiences={state.practicalExperience}
        title="Professional Experience"
        place={practicalInfo[0].key}
        role={practicalInfo[1].key}
        description={practicalInfo[2].key}
      />
      <ExperienceDisplay
        experiences={state.educationalExperience}
        title="Education"
        place={educationalInfo[0].key}
        role={educationalInfo[1].key}
        description={educationalInfo[2].key}
      />
    </div>
  );
}

export default CVApp;
