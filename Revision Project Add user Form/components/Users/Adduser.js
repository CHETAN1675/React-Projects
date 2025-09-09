function AddUser() {
  function addUserhandler(event){
    event.preventDefault();
  }
  return (
    <div>
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
    </div> 
  );
}
export default AddUser;