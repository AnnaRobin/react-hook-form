// @ts-nocheck
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

let renderCounter = 0;

const SetValueCustomRegister: React.FC = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { touched, isDirty, errors },
  } = useForm<{
    firstName: string;
    lastName: string;
    age: string;
    trigger: string;
    checkbox: boolean;
    radio: string;
    select: string;
    multiple: string[];
  }>();

  useEffect(() => {
    register({ name: 'firstName' }, { required: true });
    register({ name: 'lastName' }, { required: true });
  }, [register]);

  renderCounter++;

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(() => {})}>
      <button
        id="TriggerDirty"
        type="button"
        onClick={() => setValue('lastName', 'test', { shouldDirty: true })}
      >
        TriggerDirty
      </button>
      <button
        id="TriggerNothing"
        type="button"
        onClick={() => setValue('firstName', '', { shouldDirty: true })}
      >
        TriggerNothing
      </button>
      <button
        id="WithError"
        type="button"
        onClick={() =>
          setValue('firstName', '', { shouldValidate: true, shouldDirty: true })
        }
      >
        WithError
      </button>
      <button
        id="WithoutError"
        type="button"
        onClick={() =>
          setValue('firstName', 'true', {
            shouldValidate: true,
            shouldDirty: true,
          })
        }
      >
        WithOutError
      </button>

      <div id="dirty">{isDirty.toString()}</div>
      <div id="touched">{Object.keys(touched).map((touch) => touch)}</div>
      <div id="renderCount">{renderCounter}</div>
    </form>
  );
};

export default SetValueCustomRegister;
