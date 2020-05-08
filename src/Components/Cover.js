import React from "react";
import { ButtonContainer } from "./Button";

export default function Cover() {
  return (
    <div className="col-9 mx-auto col-md-6 col-gl-4 text-capitalize ">
      <div className="coverImg">
        <div className="info text-title ">
          <h2>grand gestures</h2>
          <h2>make memorable</h2>
          <h2>moments</h2>
          <ButtonContainer>get started</ButtonContainer>
        </div>
      </div>
    </div>
  );
}
