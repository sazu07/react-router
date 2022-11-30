import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const{name,id,username}=props.friend;
    const navigate=useNavigate()
    const showFriendsDetails=()=>{
        const path=`/friends/${id}`
        navigate(path)
    }
    return (
        <div>
            <h1>Name:{name}</h1>
            <Link to={'/friends/' + id}>Show Details</Link>
        
            <button onClick={showFriendsDetails}>{username} id:{id}</button>
        </div>
    );
};

export default Friend;