import React, { useEffect } from 'react';
import { useState } from 'react';
import Post from './Post';

const Posts = () => {
    const[posts, setPosts]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>setPosts(data))
        console.log(setPosts);
        
    },[])
    return (
        <div>
            <h1>hello post{posts.length}</h1>
          {
            posts.map(pos=><Post key={pos.id} pos={pos}/>)
          }
        </div>
    );
};

export default Posts;