import React from 'react';
import {useParams} from 'react-router-dom';

const FriendDetail = () => {
    const {friendId} = useParams();
    return (
        <div>
            FriendDetail{friendId}
        </div>
    );
};

export default FriendDetail;
//create dynamic route parameter and read from route parameter