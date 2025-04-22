import { useReducer, useState } from "react";
import "./App.css";
import GeneralInformation from "./components/GeneralInformation";
import EducationalExperience from "./components/EducationalExperience";
import PracticalExperience from "./components/PracticalExperience";
import Button from "./components/Button";

function App() {
  const [educationalExp, setEducationalExp] = useState({});
  const [practicalExp, setPracticalExp] = useState({});
  const [state, dispatch] = useReducer(reducer, {
    generalInformation: {},
    educationalExperience: [],
    practicalExperience: [],
  });
  const [showCV, setShowCV] = useState(false);
  const [errors, setErrors] = useState({
    generalInformation: {},
    educationalExperience: {},
    practicalExperience: {},
  });

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
            state={state}
            dispatch={dispatch}
            errors={errors}
            setErrors={setErrors}
          />
          <EducationalExperience
            educationalExp={educationalExp}
            setEducationalExp={setEducationalExp}
            errors={errors}
            setErrors={setErrors}
          />
          <PracticalExperience
            practicalExp={practicalExp}
            setPracticalExp={setPracticalExp}
            errors={errors}
            setErrors={setErrors}
          />
          <Button
            className="submit-form"
            text="Submit"
            onClick={(e) => {
              e.preventDefault();
              const genInfoResult = validateSectionInfo(state.generalInformation, errors, setErrors, "general-information", "generalInformation");
              const eduExpResult = validateSectionInfo(educationalExp, errors, setErrors, "educational-experience", "educationalExperience");
              const pracExpResult = validateSectionInfo(practicalExp, errors, setErrors, "practical-experience", "practicalExperience");
              if (genInfoResult && eduExpResult && pracExpResult) {
                setShowCV(true);
              }
            }}
          />
        </form>
      )}
    </>
  );
}

function reducer(state, action) {
  switch(action.type) {
    case "update_general_information": {
      return {
        ...state,
        generalInformation: {
          ...state.generalInformation,
          [action.key]: action.value,
        },
      };
    }
    // experienceType: educationalExperience || practicalExperience
    case "update_experience": {
      return {
        ...state,
        [action.experienceType]: state[action.experienceType].map((item) =>
          item.id === action.id ? {...item, [action.key]: action.value} : item
        ),
      };
    }
    case "remove_Experience": {
      return {
        ...state,
        [action.experienceType]: state[action.experienceType].filter((value) => value.id !== action.id),
      };
    }
  }

  throw Error("Unknown action.: " + action.type);
}

function validateSectionInfo(state, errors, setErrors, containerClass, errorKey) {
  let validInputs = 0;
  const inputs = document.querySelectorAll(`.${containerClass} input`);

  for (const input of inputs) {
    const key = convertKebabToCamel(input.id);
    if ((state[key] && state[key] !== "") || key.includes("endDate")) {
      validInputs += 1;
    } else {
      setErrors( errors => ({
        ...errors,
        [errorKey]: {
          ...errors[errorKey],
          [key]: "This field is required."
        }
      }));
    }
  }
  
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

// TODO: validate that the start date is not after the end date

export default App;
