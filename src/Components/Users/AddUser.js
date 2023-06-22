import React from "react";
import Card from '../UI/Card';
import classes from './AddUser.module.css'
import Button from "../UI/Button";

const AddUser = props => {
    const AddUserHandler = (event) => {
        event.preventDefault();
    }
    return (
    <Card className={classes.input}>
    <form onSubmit={AddUserHandler}>
        <lablel htmlFor="username">username</lablel>
        <input id="username" type="text"/>

        <lablel htmlFor="age">Age (Years)</lablel>
        <input id="age" type="number"/>
        <Button type="submit">Add User</Button>
    </form>
    </Card>
    )
};

export default AddUser;