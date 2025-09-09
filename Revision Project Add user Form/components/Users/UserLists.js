import "./UsersList.css"
import Card from "../UI/Card"

function UserList(props) {
  return(
    <Card className="users">
      <ul>
        {props.users.map((user) =>{
            return(
          <li key={user.id}>
            {user.name}({user.age} years old)
      </li>
      );
     })}
      </ul>
    </Card>
  );
};


export default UserList;