import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendsDetails = () => {
   
    const{friendsId}=useParams();
    const[friend, setFriend]=useState({});
   
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${friendsId}`)
        .then(res=>res.json())
        .then(data=>setFriend(data));
       
    },[friendsId, setFriend])
   
    return (
        <div>
            <h2>Friendssssssssssss</h2>
        </div>
    );
};

export default FriendsDetails;