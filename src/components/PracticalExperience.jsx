import Experience from "./Experience";

function PracticalExperience({ practicalExp, setPracticalExp }) {
  // company name, position title, main responsibilities of your jobs, date from and until when you worked for that company
  const practicalInfo = [
    {
      id: "company",
      label: "Company",
      type: "text",
      key: "company",
    },
    {
      id: "position",
      label: "Position",
      type: "text",
      key: "position",
    },
    {
      id: "responsibilities",
      label: "Responsibilities",
      type: "textarea",
      key: "responsibilities",
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
      experience={practicalExp}
      setExperience={setPracticalExp}
      containerClass="practical-experience"
      title="Practical Experience"
      addButtonClass="add-jobs"
      addButtonText="Add job"
      expType="practical"
      inputInfo={practicalInfo}
    />
  );
}

export default PracticalExperience;
