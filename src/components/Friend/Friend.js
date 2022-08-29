import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = props => {
    const {name, email, id} = props.friend;

    // const history = useHistory();

    // const handleClickShow = (friendId) => {
    // const url = `/friend/${friendId}`;
    // history.push(url);
    // }

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
            <Link to={`/friend/${id}`}><button>show detail of {id}</button></Link>
            {/* or */}<br></br>
            {/* <button onClick={() => handleClickShow(id)}>click show</button> */}
        </div>
    );
};

export default Friend;