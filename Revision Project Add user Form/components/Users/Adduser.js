import React from "react";
import Card from "../UI/Card"

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
        <button type="submit">Add User</button>
        </form>
    </Card> 
  );
}
export default AddUser;