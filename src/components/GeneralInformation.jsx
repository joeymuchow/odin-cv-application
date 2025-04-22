import Input from "./Input";

function GeneralInformation({ state, dispatch, errors, setErrors }) {

  return (
    <div className="general-information">
      <h2>General Information</h2>
      <Input
        id="first-name"
        label="First name"
        value={state.generalInformation.firstName}
        onChange={(e) => {
          dispatch({
            type: "update_general_information",
            key: "firstName",
            value: e.target.value,
          });
          setErrors(errors => ({
            ...errors,
            generalInformation: {
                ...errors.generalInformation,
                firstName: "",
            }
          }));
        }}
        errorMessage={errors.generalInformation.firstName}
      />
      <Input
        id="last-name"
        label="Last name"
        value={state.generalInformation.lastName}
        onChange={(e) => {
          dispatch({
            type: "update_general_information",
            key: "lastName",
            value: e.target.value,
          });
          setErrors(errors => ({
            ...errors,
            generalInformation: {
                ...errors.generalInformation,
                lastName: "",
            }
          }));
        }}
        errorMessage={errors.generalInformation.lastName}
      />
      <Input
        id="email"
        label="Email"
        value={state.generalInformation.email}
        type="email"
        onChange={(e) => {
          dispatch({
            type: "update_general_information",
            key: "email",
            value: e.target.value,
          });
          setErrors(errors => ({
            ...errors,
            generalInformation: {
                ...errors.generalInformation,
                email: "",
            }
          }));
        }}
        errorMessage={errors.generalInformation.email}
      />
      <Input
        id="phone"
        label="Phone"
        value={state.generalInformation.phone}
        type="phone"
        onChange={(e) => {
          dispatch({
            type: "update_general_information",
            key: "phone",
            value: e.target.value,
          });
          setErrors(errors => ({
            ...errors,
            generalInformation: {
                ...errors.generalInformation,
                phone: "",
            }
          }));
        }}
        errorMessage={errors.generalInformation.phone}
      />
    </div>
  );
}

export default GeneralInformation;
