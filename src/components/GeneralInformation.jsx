import Input from "./Input"

function GeneralInformation({ generalInfo, setGeneralInfo }) {
    // name, two inputs for first/last or one input for the whole name?
    // Should I make components for name, email, and phone?

    return (
        <>
            <Input id="first-name" label="First name" onChange={(e) => setGeneralInfo({
                ...generalInfo,
                firstName: e.target.value,
            })} />
            <Input id="last-name" label="Last name" onChange={(e) => setGeneralInfo({
                ...generalInfo,
                lastName: e.target.value,
            })} />
        </>
    )
}

export default GeneralInformation