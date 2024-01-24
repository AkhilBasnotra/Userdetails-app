import classes from "./UsersList.module.css";
import Card from "../UI/Card";

let UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;

// return <ul>{props.users.map((user) => () => {})}</ul>;
