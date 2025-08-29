import React from "react";
import ContactForm from "../composants/FormulaireMessage";

function ContactPage() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="section ">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
