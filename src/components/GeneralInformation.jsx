import Input from "./Input";

function GeneralInformation({ generalInfo, setGeneralInfo }) {
  // name, two inputs for first/last or one input for the whole name?
  // Should I make components for name, email, and phone?

  // TODO: validation for inputs, maybe that should be a part of the submit button click instead

  return (
    <>
      <Input
        id="first-name"
        label="First name"
        onChange={(e) =>
          setGeneralInfo({
            ...generalInfo,
            firstName: e.target.value,
          })
        }
      />
      <Input
        id="last-name"
        label="Last name"
        onChange={(e) =>
          setGeneralInfo({
            ...generalInfo,
            lastName: e.target.value,
          })
        }
      />
      <Input
        id="email"
        label="Email"
        type="email"
        onChange={(e) =>
          setGeneralInfo({
            ...generalInfo,
            email: e.target.value,
          })
        }
      />
      <Input
        id="phone"
        label="Phone"
        type="phone"
        onChange={(e) =>
          setGeneralInfo({
            ...generalInfo,
            phone: e.target.value,
          })
        }
      />
    </>
  );
}

export default GeneralInformation;
