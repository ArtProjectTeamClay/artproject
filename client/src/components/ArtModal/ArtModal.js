import React from "react";

import ModalWrapper from "../ModalWrapper.jsx";

const ArtModal = props => {
  const artModal = provider => {
    props.hideModal();
    props.artModal(provider);
  };

  return (
    <ModalWrapper {...props} title="Art Name" width={800} showOk={false}>
      <p>Look at this art</p>

      <button onClick={() => signIn("twitter")}>Buy</button>
    </ModalWrapper>
  );
};

export default ArtModal;
