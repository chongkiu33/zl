import React from "react";

// reactstrap components
import { Button, Card, Collapse } from "reactstrap";

function Example() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  return (
    <>
      <p>
        <Button
          color="primary"
          href="#pablo"
          onClick={(e) => {
            e.preventDefault();
            setCollapseOpen(!collapseOpen);
          }}
          role="button"
          id="collapseExample"
        >
          Link with href
        </Button>
        <Button
          color="primary"
          type="button"
          id="collapseExample"
          onClick={() => {
            setCollapseOpen(!collapseOpen);
          }}
        >
          Button with data-target
        </Button>
      </p>
      <Collapse isOpen={collapseOpen}>
        <Card className=" card-body">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </Card>
      </Collapse>
    </>
  );
}

export default Example;