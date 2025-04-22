import Experience from "./Experience";

function EducationalExperience({ educationalExp, setEducationalExp, errors, setErrors }) {
  const educationalInfo = [
    {
      id: "school",
      label: "School",
      type: "text",
      key: "school"
    },
    {
      id: "degree",
      label: "Degree",
      type: "text",
      key: "degree"
    },
    {
      id: "area-of-study",
      label: "Area of study",
      type: "text",
      key: "areaOfStudy"
    },
    {
      id: "start-date",
      label: "Start date",
      type: "date",
      key: "startDate"
    },
    {
      id: "end-date",
      label: "End date",
      type: "date",
      key: "endDate"
    },
  ];

  return (
    <Experience
      experience={educationalExp}
      setExperience={setEducationalExp}
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
