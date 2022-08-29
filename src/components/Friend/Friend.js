import React from 'react';
import { Link } from 'react-router-dom';

const Friend = props => {
    const {name, email, id} = props.friend;

    const friendStyle = {
        border: '1px solid purple',
        margin: '20px auto',
        padding: '20px',
        borderRadius: '20px',
        width: "80%",
    }
    return (
        <div style={friendStyle}>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>Id: {id} <Link to={`/friend/${id}`}>show detail of {id}</Link> </p>
        </div>
    );
};

export default Friend;