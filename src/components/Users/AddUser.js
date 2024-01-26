import { useState, Fragment, useRef } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

let AddUser = (props) => {
  let nameInputRef = useRef();
  let ageInputRef = useRef();
  let collegeNameRef = useRef();

  const [error, setError] = useState();

  function submitHandler(e) {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    const enteredCollegeName = collegeNameRef.current.value;
    if (
      enteredName.trim().length === 0 ||
      enteredUserAge.trim().length === 0 ||
      enteredCollegeName.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name, age and collegeName",
      });
      return;
    }

    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid age",
      });
      return;
    }
    props.onAddUser(enteredName, enteredUserAge, enteredCollegeName);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    collegeNameRef.current.value = "";
  }

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <label htmlFor="college-name">College name</label>
          <input id="College-name" type="text" ref={collegeNameRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddUser;
