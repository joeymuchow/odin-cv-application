import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

function Experience({
  experience,
  setExperience,
  containerClass,
  title,
  addButtonClass,
  addButtonText,
  expType,
  inputInfo,
  errors,
  setErrors,
}) {
  const [expArray, setExpArray] = useState([]);
  const [count, setCount] = useState(0);

  return (
    <div className={containerClass}>
      <h2>{title}</h2>
      {expArray &&
        expArray.map((value, index) => (
          <div key={value.id}>
            <value.component
              experience={experience}
              setExperience={setExperience}
              idIndex={value.id}
              expType={expType}
              inputInfo={inputInfo}
              errors={errors}
              setErrors={setErrors}
            />
            <Button
              className="delete-exp-btn"
              text="Delete"
              onClick={(e) => {
                e.preventDefault();
                const array = [...expArray];
                const filteredArray = array.filter((experience) => {
                  return value.id !== experience.id;
                });
                setExpArray(filteredArray);
              }}
            />
            {index !== expArray.length - 1 && <hr />}
          </div>
        ))}
      <Button
        className={addButtonClass}
        text={addButtonText}
        onClick={(e) => {
          e.preventDefault();
          setExpArray([
            ...expArray,
            {
              id: count,
              component: ExperienceItem,
            },
          ]);
          setCount(count + 1);
        }}
      />
    </div>
  );
}

function ExperienceItem({
  experience,
  setExperience,
  idIndex,
  expType,
  inputInfo,
  errors,
  setErrors,
}) {
  return (
    <>
      {inputInfo &&
        inputInfo.map((value, index) => (
          <Input
            key={index}
            id={value.id + idIndex}
            label={value.label}
            type={value.type}
            onChange={(e) => {
              setExperience({
                ...experience,
                [value.key + idIndex]: e.target.value,
              });
              setErrors(errors => ({
                ...errors,
                [expType]: {
                  ...errors[expType],
                  [value.key + idIndex]: "",
                },
              }));
            }}
            errorMessage={errors[expType][value.key + idIndex]}
          />
        ))}
    </>
  );
}

export default Experience;
