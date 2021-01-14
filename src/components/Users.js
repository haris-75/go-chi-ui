import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import getUser from "../API/getUser";

function Users() {
  const [users, setUsers] = useState([]);
  const [headers, setHeaders] = useState([]);
  function getAllUsers() {
    getUser()
      .then((response) => {
        console.log("USERS", response.data);
        var users = response.data;

        var headerArray = [];
        for (var key in users[0]) {
          headerArray.push(key);
        }

        setUsers(users);
        setHeaders(headerArray);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }

  return (
    <>
      <Button onClick={getAllUsers}>Get All Users</Button>
      {users ? (
        <Table>
          <tr>
            {headers.map((header) => (
              <th>{header}</th>
            ))}
          </tr>

          {users.map((user) => (
            <tr>
              {Object.keys(user).map((item, i) => (
                <td key={i}> {user[item]} </td>
              ))}
            </tr>
          ))}
        </Table>
      ) : null}
    </>
  );
}

export default Users;
