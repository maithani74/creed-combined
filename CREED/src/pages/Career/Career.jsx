import React from "react";

import MainForm from "./MainForm";
import styled from "styled-components";
import PrimaryWrapper from "../../components/common/PrimaryWrapper";
function Career() {
  return (
    <PrimaryWrapper>
      <div className="flex bg-[white] justify-center items-center w-full min-h-[80vh] ">
        <MainForm />
      </div>
    </PrimaryWrapper>
  );
}

export default Career;
