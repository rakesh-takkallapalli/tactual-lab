import React from "react";
import { Form, Button, Checkbox, Segment } from "semantic-ui-react";

function Stock() {
  return (
    <Segment>
      <Form>
        <Form.Field>
          <label>Product Name</label>
          <input placeholder="Product Name" />
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <input placeholder="Description" />
        </Form.Field>
        <Form.Group widths="equal">
          <Form.Field>
            <label>Quantity</label>
            <input type="text" placeholder="0" />
          </Form.Field>
          <Form.Field>
            <label>Price</label>
            <input type="text" placeholder="0" />
          </Form.Field>
        </Form.Group>
        <Button type="submit" primary>
          Submit
        </Button>
      </Form>
    </Segment>
  );
}

export default Stock;
