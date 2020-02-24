import React from "react";
import ReactDOM from "react-dom";
import TextForm from "./text";
import CBoxForm from "./cbox";
import TextAreaForm from "./textarea";
import RadioForm from "./radio";
import SelectForm from "./select";

ReactDOM.render(
  <div>
    <TextForm />

    <CBoxForm />

    <TextAreaForm />

    <RadioForm />

    <SelectForm />
  </div>,
  document.getElementById("root")
);
