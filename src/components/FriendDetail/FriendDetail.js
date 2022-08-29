import React,{useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

const FriendDetail = () => {
    const {friendId} = useParams();
    //const {name, email, phone, website} = friend;
    const [friend, setFriend] = useState([]);

    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
      .then(res => res.json())
      .then(data => setFriend(data))
    }, [])

    return (
        <div>
            <h1>FriendDetail {friendId}</h1>
            <h3>{friend.name}</h3>
            <h3>{friend.email}</h3>
            <p>{friend.phone}</p>
            <p>{friend.website}</p>
        </div>
    );
};

export default FriendDetail;
// two ways to navigate dynamic route