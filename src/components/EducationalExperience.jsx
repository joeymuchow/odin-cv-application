import Experience from "./Experience";
import { educationalInfo } from "../constants";

function EducationalExperience({ state, dispatch, errors, setErrors }) {

  return (
    <Experience
      state={state}
      dispatch={dispatch}
      containerClass="educational-experience"
      title="Educational Experience"
      addButtonClass="add-schools"
      addButtonText="Add school"
      expType="educationalExperience"
      inputInfo={educationalInfo}
      errors={errors}
      setErrors={setErrors}
    />
  );
}

export default EducationalExperience;
