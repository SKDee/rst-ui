import { Button } from "rut-ui";
import React, { Fragment } from "react";

export default () => {
  return (
    <Fragment>
      <Button type="primary">Primary</Button>
      <Button type="warning">warning</Button>
      <Button type="info">Info</Button>
      <Button type="danger">Danger</Button>
      <Button type="success">Success</Button>
      <Button type="text">Text</Button>
    </Fragment>
  );
};