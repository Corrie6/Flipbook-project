import React, { useState } from "react";

import Header from "../components/header";

import ReadingForm from "../components/AddReadingForm";

const AddRead = () => {
  return (
    <>
      <link href="/dist/output.css" rel="stylesheet"></link>
      <Header />
      <ReadingForm />
    </>
  );
};
export default AddRead;
