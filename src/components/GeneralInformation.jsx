import Input from "./Input";

function GeneralInformation({ generalInfo, setGeneralInfo, errors, setErrors }) {

  return (
    <div className="general-information">
      <h2>General Information</h2>
      <Input
        id="first-name"
        label="First name"
        onChange={(e) => {
          setGeneralInfo({
            ...generalInfo,
            firstName: e.target.value,
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
        onChange={(e) => {
          setGeneralInfo({
            ...generalInfo,
            lastName: e.target.value,
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
        type="email"
        onChange={(e) => {
          setGeneralInfo({
            ...generalInfo,
            email: e.target.value,
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
        type="phone"
        onChange={(e) => {
          setGeneralInfo({
            ...generalInfo,
            phone: e.target.value,
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
