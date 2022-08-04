import React, { useId } from "react";

interface EmailInputProps {
  label: string;
  name: string;
}

export default function EmailInput({ label, name }: EmailInputProps) {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>
        {label}
        <input type="text" name={name} id={id} />
      </label>
    </div>
  );
}
