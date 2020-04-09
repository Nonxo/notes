import React, { useReducer, Fragment } from "react";
import { Form, Label, Button } from "semantic-ui-react";
import { Row, Col } from "react-bootstrap";

const initialState = {
  email: "",
  password: "",
  emailError: false,
  passwordVisibility: false,
};

// const reducer = (state, action) => {};

function SignInInput() {
  //   const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Fragment>
      <Form>
        <Row>
          <Col md={12} className="mb-2">
            <Form.Field>
              <input type="text" placeholder="Username" />
              <Label basic color="red" pointing>
                Please enter a username
              </Label>
            </Form.Field>
            <Form.Field>
              <input type="password" placeholder="Password" />
              <Label basic color="red" pointing>
                Your password must be 6 characters or more
              </Label>
            </Form.Field>
            <Form.Field>
              <Button className="signup-button" fluid>
                SIGN IN
              </Button>
            </Form.Field>
          </Col>
        </Row>
      </Form>
    </Fragment>
  );
}

export default SignInInput;
