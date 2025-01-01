import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import UsersTable from "./components/UsersTable";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]); 
  const [searchQuery, setSearchQuery] = useState("");
  const [searchUsers, setsearchUsers] = useState([]); 

  // Static JSON data
  const userData = [
    { id: 1, name: "John Doe", email: "john.doe@example.com", age: 28 },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", age: 34 },
    { id: 3, name: "Sam Johnson", email: "sam.johnson@example.com", age: 22 },
    { id: 4, name: "Alice Williams", email: "alice.williams@example.com", age: 25 },
    { id: 5, name: "Bob Brown", email: "bob.brown@example.com", age: 30 },

    // My Users
    { id:6, name:"Danish Momin", email:"danishmomin@example.com", age: 22},
    { id:7, name:"Danish Momin2", email:"danishmomin2@example.com", age: 19},
    { id:8, name:"Danish Momin3", email:"danishmomin3@example.com", age: 20},
    { id:9, name:"Danish Momin4", email:"danishmomin4@example.com", age: 21},
    { id:10, name:"Danish Momin5", email:"danishmomin5@example.com", age: 23},
  ];

  useEffect(() => {
    setUsers(userData);
    setsearchUsers(userData);
  }, []);

  useEffect(() => {
    const results = users.filter((user) =>
      user.name.toUpperCase().includes(searchQuery.toUpperCase())
    );
    setsearchUsers(results);
  }, [searchQuery, users]);

  return (
    <div className="app">
      <h1>List Of Users</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <UsersTable searchUsers={searchUsers} searchQuery={searchQuery} />
    </div>
  );
};

export default App;
