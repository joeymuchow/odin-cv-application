import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

function EducationalExperience({ educationalExp, setEducationalExp }) {
  // school name, title of study and date of study
  // Need ability to add multiple of these sections
  const [schoolsArray, setSchoolsArray] = useState([]);
  const [count, setCount] = useState(0);

  return (
    <div className="educational-experience">
      <h2>Educational Experience</h2>
      {schoolsArray && schoolsArray.map((value, index) => (
        <div key={value.id}>
          <value.component educationalExp={educationalExp} setEducationalExp={setEducationalExp} idIndex={value.id} />
          {index !== schoolsArray.length - 1 && (
            <hr />
          )}
        </div>
      ))}
      <Button
        className="add-schools"
        text="Add school"
        onClick={(e) => {
          e.preventDefault();
          setSchoolsArray([
            ...schoolsArray,
            {
              id: count,
              component: EducationalExperienceItem,
            },
          ]);
          setCount(count + 1);
        }}
      />
    </div>
  );
}

function EducationalExperienceItem({ educationalExp, setEducationalExp, idIndex }) {
  const sectionId = "education" + idIndex;

  return (
    <>
      <Input
          id={"school" + idIndex}
          label="School"
          onChange={(e) => {
            setEducationalExp({
              ...educationalExp,
              [sectionId]: {
                ...educationalExp[sectionId],
                school: e.target.value,
              }
            });
          }}
        />
        <Input
          id={"degree" + idIndex}
          label="Degree"
          onChange={(e) => {
            setEducationalExp({
              ...educationalExp,
              [sectionId]: {
                ...educationalExp[sectionId],
                degree: e.target.value,
              }
            });
          }}
        />
        <Input
          id={"area-of-study" + idIndex}
          label="Area of study"
          onChange={(e) => {
            setEducationalExp({
              ...educationalExp,
              [sectionId]: {
                ...educationalExp[sectionId],
                areaOfStudy: e.target.value,
              }
            });
          }}
        />
        <Input
          id={"start-date" + idIndex}
          label="Start date"
          type="date"
          onChange={(e) => {
            setEducationalExp({
              ...educationalExp,
              [sectionId]: {
                ...educationalExp[sectionId],
                startDate: e.target.value,
              }
            });
          }}
        />
        <Input
          id={"end-date" + idIndex}
          label="End date"
          type="date"
          onChange={(e) => {
            setEducationalExp({
              ...educationalExp,
              [sectionId]: {
                ...educationalExp[sectionId],
                endDate: e.target.value,
              }
            });
          }}
        />
      </>
  );
}

export default EducationalExperience;
