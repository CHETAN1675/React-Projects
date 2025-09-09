import React from "react";
import AddUser from "./components/Users/AddUser"

function App() {
  return (
    <div>
    <AddUser />
    <UserList users={[]} />
    </div>
    
  );
}

export default App;
