import React, {useState} from "react";
import Card from '../UI/Card';
import classes from './AddUser.module.css'
import Button from "../UI/Button";
import ErrorModal from '../UI/ErrorModal'

const AddUser = props => {
    const [enteredUsername, setEnteredusername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();
    
    
    const AddUserHandler = (event) => {
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name & age'
            });
            return;
        }
        if(+enteredAge < 1){
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age'
            });
            return;
        }

        props.onAddUser(enteredUsername, enteredAge);
        setEnteredusername('');
        setEnteredAge('');
    }

const usernameChangeHandler = (event) => {
    setEnteredusername(event.target.value);
};

const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
};

const myErrorHandler = () => {
    setError(null);
};

    return (
        <React.Fragment>
        {error && <ErrorModal title={error.title} message={error.message} onHandleError={myErrorHandler}/>}
    <Card className={classes.input}>
    <form onSubmit={AddUserHandler}>
        <label htmlFor="username">username</label>
        <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}/>

        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" value={enteredAge}onChange={ageChangeHandler}/>
        <Button type="submit">Add User</Button>
    </form>
    </Card>
    </React.Fragment>
    )
};

export default AddUser;