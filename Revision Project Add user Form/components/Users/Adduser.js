import React from "react";
import Card from "../UI/Card"
import Button from "../UI/Button";
import "./AddUser.css";

function AddUser() {
     const [inputAge, setInputAge] = useState("");
  const [inputName, setInputName] = useState("");

  const nameChangeHandler = (event) => {
    setInputName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setInputAge(event.target.value);

     console.log(inputName,inputAge)
    setInputName("");
    setInputAge("");
  };
  
  function addUserhandler(event){
    event.preventDefault();
  }
  return (
     <Card className="input">
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" value={inputName} onChange={nameChangeHandler} />
        <label htmlFor="age">Age</label>
        <input id="age" type="number" value={inputAge}
          onChange={ageChangeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}
export default AddUser;