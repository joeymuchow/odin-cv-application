import { useReducer, useState } from "react";
import "./App.css";
import GeneralInformation from "./components/GeneralInformation";
import EducationalExperience from "./components/EducationalExperience";
import PracticalExperience from "./components/PracticalExperience";
import Button from "./components/Button";
import CVApp from "./components/CVApp";
import { isAfter } from "date-fns";

function App() {
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

  return (
    <>
      
      {showCV ? (
        <div>
          <CVApp state={state} />
          <Button className="edit-btn" text="Edit" onClick={() => setShowCV(false)} />
        </div>
      ) : (
        <>
          <h1>CV Generation Application</h1>
          <form className="cv-form">
            <GeneralInformation
              state={state}
              dispatch={dispatch}
              errors={errors}
              setErrors={setErrors}
            />
            <EducationalExperience
              state={state}
              dispatch={dispatch}
              errors={errors}
              setErrors={setErrors}
            />
            <PracticalExperience
              state={state}
              dispatch={dispatch}
              errors={errors}
              setErrors={setErrors}
            />
            <Button
              className="submit-form"
              text="Submit"
              onClick={(e) => {
                e.preventDefault();
                const genInfoResult = validateGeneralInfo(state.generalInformation, setErrors);
                const eduExpResult = validateExperienceSectionInfo(state.educationalExperience, setErrors, "educational-experience", "educationalExperience");
                const pracExpResult = validateExperienceSectionInfo(state.practicalExperience, setErrors, "practical-experience", "practicalExperience");
                const eduExpDateResult = validateDateInputs(setErrors, "educational-experience", "educationalExperience");
                const pracExpDateResult = validateDateInputs(setErrors, "practical-experience", "practicalExperience");
                if (genInfoResult && eduExpResult && pracExpResult && eduExpDateResult && pracExpDateResult) {
                  setShowCV(true);
                }
              }}
            />
          </form>
        </>
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
    case "add_new_experience": {
      return {
        ...state,
        [action.expType]: [...state[action.expType], {id: action.id}]
      }
    }
    case "update_experience": {
      return {
        ...state,
        [action.expType]: state[action.expType].map((item) =>
          item.id === action.id ? {...item, [action.key]: action.value} : item
        ),
      };
    }
    case "remove_Experience": {
      return {
        ...state,
        [action.expType]: state[action.expType].filter((value) => value.id !== action.id),
      };
    }
  }

  throw Error("Unknown action.: " + action.type);
}

function validateGeneralInfo(state, setErrors) {
  let validInputs = 0;
  const inputs = document.querySelectorAll(".general-information input");

  for (const input of inputs) {
    const key = convertKebabToCamel(input.id);
    if (state[key] && state[key] !== "") {
      validInputs += 1;
    } else {
      setErrors( errors => ({
        ...errors,
        generalInformation: {
          ...errors.generalInformation,
          [key]: "This field is required."
        }
      }));
    }
  }
  
  return validInputs === inputs.length;
}

function validateExperienceSectionInfo(state, setErrors, containerClass, errorKey) {
  let validInputs = 0;
  const inputs = Array.from(document.querySelectorAll(`.${containerClass} input`));
  const textAreas = Array.from(document.querySelectorAll(`.${containerClass} textarea`));
  // practical experience sections have a textarea element
  inputs.push(...textAreas);

  for (const input of inputs) {
    const inputId = convertKebabToCamel(input.id);
    const array = inputId.split(/(\d+)/);
    const key = array[0];
    const id = Number(array[1]);
    const item = state.filter((val) => val.id === id)[0];
    
    if ((item[key] && item[key] !== "") || key === "endDate") {
      validInputs += 1;
    } else {
      setErrors( errors => ({
        ...errors,
        [errorKey]: {
          ...errors[errorKey],
          [inputId]: "This field is required."
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

function validateDateInputs(setErrors, expType, errorKey) {
  const dateInputs = document.querySelectorAll(`.${expType} input[type=date]`);
  let validDateInputs = 0;

  for (let i = 0; i < dateInputs.length; i += 2) {
    const start = dateInputs[i];
    const end = dateInputs[i+1];

    if (!end.value) {
      validDateInputs += 2;
      continue;
    }

    if (isAfter(end.value, start.value)) {
      validDateInputs += 2;
    } else {
      const key = convertKebabToCamel(dateInputs[i].id);
      setErrors( errors => ({
        ...errors,
        [errorKey]: {
          ...errors[errorKey],
          [key]: "The start date must be before the end date.",
        }
      }));
    }
  }

  return validDateInputs === dateInputs.length;
}

export default App;
