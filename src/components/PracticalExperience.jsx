import Experience from "./Experience";
import { practicalInfo } from "../constants";

function PracticalExperience({ state, dispatch, errors, setErrors }) {
  return (
    <Experience
      state={state}
      dispatch={dispatch}
      containerClass="practical-experience"
      title="Practical Experience"
      addButtonClass="add-jobs"
      addButtonText="Add job"
      expType="practicalExperience"
      inputInfo={practicalInfo}
      errors={errors}
      setErrors={setErrors}
    />
  );
}

export default PracticalExperience;
