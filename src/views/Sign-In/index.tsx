import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import memoIcon from "../../assets/img/notepad.svg";
import { Link } from "react-router-dom";
import SignInInput from "../../components/SignInInput";
import { Header } from "semantic-ui-react";

const SignIn = () => {
  return (
    <Row className="mx-auto h100Vh">
      <Col md={4} className="bg-brown px-5 d-md-block d-none">
        <Container>
          <div className="side_view pt-4">
            <img
              className="img-fluid"
              id="notesLogo"
              src={memoIcon}
              alt="Logo"
              style={{ width: "10%" }}
            />

            <Col md={12} className="auth--header__padding-top">
              <img
                src={memoIcon}
                className="img-fluid"
                alt=""
                style={{ maxWidth: "200px" }}
              />
            </Col>

            <div className="mt-3 pt-3">
              <h4 id="auth-header" className="font-weight-bold auth__header">
                Start creating memos with notes...
              </h4>
            </div>
          </div>
          <Col md={12}>
            <div className="mx-auto pt-5">
              <Row>
                  <Col md={5}>
                    <div className="text-secondary d-inline-flex">
                      <p id="privacy">Privacy</p>
                      <p className="px-2">|</p>
                      <p id="term">Terms</p>
                    </div>
                  </Col>

                    <Col md={5}>
                      <p id="langSelector"
                         className="text-secondary text-md-right">Open Source</p>
                    </Col>
              </Row>
            </div>
          </Col>
        </Container>
      </Col>
      <Col md={8} className="py-4">
        <Container className="h-100">
          <p className="text-secondary text-md-right text-center">
            Don't have an account?
            <Link to="/signup" className="text-register">
              <span
                id="signInText"
                className="brown__text cursor font-weight-medium"
              >
                {" "}
                Register
              </span>
            </Link>
          </p>

          <Col md={12} className="vertical-alignment">
            <div className="sign-up__div mx-auto">
              <Header
                as="h2"
                id="signIn-text"
                className="font-weight-semi-bold pb-2"
              >
                Sign in to view saved notes.
              </Header>
              <SignInInput />
            </div>
          </Col>
        </Container>
      </Col>
    </Row>
  );
};

export default SignIn;
