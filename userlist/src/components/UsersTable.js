import React from "react";

const UserTable = ({ searchUsers, searchQuery }) => {
  return (
    <table className="user-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {searchUsers.map((user) => (
          <tr
            key={user.id}
            className={
              searchQuery && user.name.toLowerCase().includes(searchQuery.toLowerCase())
                ? "highlight"
                : ""
            }
          >
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
