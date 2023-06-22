import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';
import {useState} from 'react'; 
function App() {
const [usersList, setUsersList] = useState([]);

const AddUserHandler = (uName, uAge) => {
  setUsersList( (prevUsersList) => {
    return [...prevUsersList, {name: uName, age: uAge, id: Math.random().toString()}];
  });
}

  return (
    <div className="">
      <AddUser onAddUser={AddUserHandler}/>
      <UsersList users={usersList}/>
      
    </div>
  );
}

export default App;
