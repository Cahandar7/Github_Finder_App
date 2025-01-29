import React, { useEffect, useState } from "react";
import Header from "./Header";
import Search from "./Search";
import axios from "axios";
import UserList from "./UserList";

const App = () => {
  const [user, setUser] = useState([]);

  const searchByKeyword = (keyword) => {
    axios
      .get(`https://api.github.com/search/users?q=${keyword}`)
      .then((res) => setUser(res.data.items))
      .catch((err) => console.log("error in api"));
  };

  return (
    <>
      <Header />
      <Search sendKeyword={searchByKeyword} />
      <UserList users={user} />
    </>
  );
};

export default App;
