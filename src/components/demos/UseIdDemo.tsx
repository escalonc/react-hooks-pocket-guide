import React from "react";
import EmailInput from "../EmailInput";

export default function UseIdDemo() {
  return (
    <div>
      <EmailInput name="workEmail" label="Work Email" />
      <EmailInput name="personalEmail" label="Personal Email" />
    </div>
  );
}
