import React from "react";
import Card from "../UI/Card"
import Button from "../UI/Button";
import "./AddUser.css";

function AddUser() {
  function addUserhandler(event){
    event.preventDefault();
  }
  return (
    <Card className= "input">
    <form  Onsubmit={addUserhandler}>
      <div>
      <label htmlFor="username">Username</label>
        <input type="text" id="username" />
      </div>
      <div>
        <label htmlFor="age">Age</label>
        <input type="number" id="age" />
      </div>
        <Button type="submit">Add User</Button>
        </form>
    </Card> 
  );
}
export default AddUser;