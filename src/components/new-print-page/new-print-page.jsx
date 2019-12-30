import React from "react";
import PrintForm from "./new-print-form/print-form";
import { NewPrintInfoProvider } from "./printContext";


const NewPrintPage = () => {
  return (
    <div className="Container">
      <PrintForm />
    </div>
  );
};

export default NewPrintPage;
