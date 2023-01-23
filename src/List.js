import React from "react";
const Lists = ({ usernames }) => {
  return (
    <div>
      <ul>
        {usernames.map((username) => (
          <li key={username.id}>{username.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default Lists;
