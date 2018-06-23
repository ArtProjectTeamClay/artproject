import React from "react";

import ModalWrapper from "../ModalWrapper.jsx";

const ArtModalBootstrap = props => {
  <div className="static-modal">
    <Modal.Dialog>
      <Modal.Header>
        <img
          className="art-fullsize"
          src="https://dg19s6hp6ufoh.cloudfront.net/pictures/613209425/large/PicassoBullsHead.jpeg?1491535886"
          alt="full size image"
        />
      </Modal.Header>

      <Modal.Body>This is nice</Modal.Body>

      <Modal.Footer>
        <Button>Close</Button>
        <Button bsStyle="primary">Save changes</Button>
      </Modal.Footer>
    </Modal.Dialog>
  </div>;
};

export default ArtModalBootstrap;
