import React, { useState } from "react";
import { Container, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Swal from "sweetalert2";

const Search = ({ sendKeyword }) => {
  const [keyword, setKeyword] = useState("");
  const formSubmit = (e) => {
    e.preventDefault();
    if (!keyword) {
      Swal.fire({
        title: "Please, fill the field",
        icon: "warning",
      });
    } else {
      sendKeyword(keyword);
      setKeyword("");
    }
  };

  return (
    <Container className="d-flex align-items-center justify-content-center flex-column">
      <h1 className="my-4">Search</h1>
      <Col sm="12" md="3">
        <form onSubmit={formSubmit} className="input-group mb-3">
          <input
            onChange={(e) => setKeyword(e.target.value)}
            value={keyword}
            type="text"
            className="form-control"
            placeholder="Enter username"
          />
          <button className="btn btn-dark" type="submit" id="button-addon2">
            Search
          </button>
        </form>
      </Col>
    </Container>
  );
};

export default Search;
