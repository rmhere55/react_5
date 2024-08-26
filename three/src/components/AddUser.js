import React, { useState } from 'react';
import "./AddUser.css";

const AddUser = () => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Username:', enteredUsername, 'Age:', enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  };

  return (
    <form onSubmit={addUserHandler}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={enteredUsername}
          onChange={(event) => setEnteredUsername(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          value={enteredAge}
          onChange={(event) => setEnteredAge(event.target.value)}
        />
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
