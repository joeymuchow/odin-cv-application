import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

function Experience({ experience, setExperience, containerClass, title, addButtonClass, addButtonText, expType, inputInfo }) {
  const [expArray, setExpArray] = useState([]);
  const [count, setCount] = useState(0);

  return (
    <div className={containerClass}>
      <h2>{title}</h2>
      {expArray && expArray.map((value, index) => (
        <div key={value.id}>
          <value.component experience={experience} setExperience={setExperience} idIndex={value.id} expType={expType} inputInfo={inputInfo} />
          {index !== expArray.length - 1 && (
            <hr />
          )}
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

function ExperienceItem({ experience, setExperience, idIndex, expType, inputInfo }) {
  const sectionId = expType + idIndex;

  return (
    <>
      {inputInfo && inputInfo.map((value, index) => (
        <Input
          key={index}
          id={value.id + idIndex}
          label={value.label}
          type={value.type}
          onChange={(e) => {
            setExperience({
              ...experience,
              [sectionId]: {
                ...experience[sectionId],
                [value.key]: e.target.value,
              }
            });
          }}
        />
      ))}
    </>
  );
}

export default Experience;
