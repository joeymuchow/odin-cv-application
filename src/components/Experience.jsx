import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

function Experience({
  state,
  dispatch,
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
              state={state}
              dispatch={dispatch}
              count={count}
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
                dispatch({
                  type: "remove_Experience",
                  id: value.id,
                  expType,
                });
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
          dispatch({
            type: "add_new_experience",
            id: count,
            expType,
          });
          setCount(count + 1);
        }}
      />
    </div>
  );
}

function ExperienceItem({
  state,
  dispatch,
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
            value={
              state[expType].filter((value) => {
                return value.id === idIndex;
              })[0][value.key]
            }
            onChange={(e) => {
              dispatch({
                type: "update_experience",
                expType,
                id: idIndex,
                key: value.key,
                value: e.target.value,
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
