import React from 'react';

const Friend = props => {
    const {name, email} = props.friend;

    const friendStyle = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }
    return (
        <div style={friendStyle}>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
        </div>
    );
};

export default Friend;