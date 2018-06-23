import React from "react";

import ArtModal from "./ArtModal.js";
import SignIn from "./SignIn.js";

const ModalConductor = props => {
  switch (props.currentModal) {
    case "EXPORT_DATA":
      return <ArtModal {...props} />;
    case "EXPORT_DATA":
      return <SignIn {...props} />;

    default:
      return null;
  }
};

export default ModalConductor;
