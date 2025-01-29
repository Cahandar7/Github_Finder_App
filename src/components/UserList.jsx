import React from "react";
import SingleCard from "./SingleCard";
import { Container, Row } from "react-bootstrap";

const UserList = ({ users }) => {
  return (
    <Container>
      <Row className="g-3 mt-2">
        {users.map((item, index) => (
          <SingleCard
            key={index}
            image={item.avatar_url}
            title={item.login}
            desc={item.node_id}
            url={item.html_url}
          />
        ))}
      </Row>
    </Container>
  );
};

export default UserList;
