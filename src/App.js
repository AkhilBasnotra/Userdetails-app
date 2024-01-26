import { Fragment, useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [userList, addUserList] = useState([]);

  const addUserHandler = (uName, uAge, ucollegeName) => {
    addUserList((prevUserList) => {
      return [
        ...prevUserList,
        {
          name: uName,
          age: uAge,
          collegeName: ucollegeName,
          id: Math.random().toLocaleString(),
        },
      ];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userList} />
    </Fragment>
  );
}

export default App;
