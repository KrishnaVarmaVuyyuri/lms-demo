import React, { useEffect, useState } from "react";

const DashBoard = () => {
  const [user, setUser] = useState({ firstname: "", lastname: "" });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userData"));
    if (storedUser) {
      setUser({
        firstname: storedUser.firstname,
        lastname: storedUser.lastname
      });
    }
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <p className="fs-1">Welcome {user.firstname} {user.lastname}</p>
    </div>
  );
};

export default DashBoard;
