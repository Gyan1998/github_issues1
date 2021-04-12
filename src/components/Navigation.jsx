import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

function Navigation(props) 
{
  return (
    <div className="container">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="https://github.com/">
          <img
            src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
            height="80px"
          />
        </Navbar.Brand>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Existing_User-Name"
            className=" mr-sm-2"
            id="userName"
          />
          <FormControl
            type="text"
            placeholder="Existing_Repo-Name"
            className=" mr-sm-2"
            id="repoName"
          />
          <Button variant="outline-info" onClick={props.clickme}>
            Search
          </Button>
        </Form>
      </Navbar>
    </div>
  );
}

export default Navigation;
