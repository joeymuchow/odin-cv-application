import { useState } from "react";
import "./App.css";
import GeneralInformation from "./components/GeneralInformation";
import EducationalExperience from "./components/EducationalExperience";
import PracticalExperience from "./components/PracticalExperience";
import Button from "./components/Button";

function App() {
  const [generalInfo, setGeneralInfo] = useState({});
  const [educationalExp, setEducationalExp] = useState({});
  const [practicalExp, setPracticalExp] = useState({});
  const [showCV, setShowCV] = useState(false);
  const [errors, setErrors] = useState({
    generalInformation: {},
    educationalExperience: {},
    practicalExperience: {},
  });

  // Should all the components below be surrounded by a form?
  // As in this file has a form element surrounding all components
  // General information
  // Educational experience
  // Practical experience

  // make a visual component that uses info from above components to create a resume

  // There will be a submit button for taking all the entered info and displaying it in a view
  // There should be either one edit button for the whole form or one for each section. I'm leaning toward one edit button for everything
  // Clicking edit will show the components for entering info again, with their current values filled in
  return (
    <>
      <h1>CV Generation Application</h1>
      {showCV ? (
        <div>
          <Button className="edit-btn" text="Edit" onClick={() => setShowCV(false)} />
        </div>
      ) : (
        <form className="cv-form">
          <GeneralInformation
            generalInfo={generalInfo}
            setGeneralInfo={setGeneralInfo}
            errors={errors}
            setErrors={setErrors}
          />
          <EducationalExperience
            educationalExp={educationalExp}
            setEducationalExp={setEducationalExp}
          />
          <PracticalExperience
            practicalExp={practicalExp}
            setPracticalExp={setPracticalExp}
          />
          <Button
            className="submit-form"
            text="Submit"
            onClick={(e) => {
              e.preventDefault();
              if (validateGeneralInfo(generalInfo, errors, setErrors)) {
                setShowCV(true);
              }
            }}
          />
        </form>
      )}
    </>
  );
}

function validateGeneralInfo(generalInfo, errors, setErrors) {
  let validInputs = 0;
  const inputs = document.querySelectorAll(".general-information input");
  let errorObj = errors;

  for (const input of inputs) {
    const key = convertKebabToCamel(input.id);
    console.log(key);
    if (generalInfo[key]) {
      validInputs += 1;
    } else {
      errorObj = {
        ...errorObj,
        generalInformation: {
          ...errorObj.generalInformation,
          [key]: "This field is required."
        }
      };
    }
  }
  
  setErrors(errorObj);
  return validInputs === inputs.length;
}

function convertKebabToCamel(id) {
  const idArray = id.split("-");

  if (idArray.length === 1) {
    return idArray[0];
  } else {
    let camelCaseId = idArray[0];
    for (let i = 1; i < idArray.length; i++) {
      camelCaseId += idArray[i][0].toUpperCase() + idArray[i].slice(1);
    }
    return camelCaseId;
  }
}

export default App;
