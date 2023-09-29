import React, {useEffect, useState} from "react";
import axios from "axios";
function  DataFetching() {
    const [post,setPost]=new useState({})
    const[id,setId]=useState(1)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res=>{
                console.log(res)
                setPost(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
    },[id])

    return (
        <>
            <input type={"text"} value={id} onChange={e => setId(e.target.value)}/>
           <h1> {post.title}</h1>
                {/*<ul>*/}
                {/*    {*/}
                {/*        posts.map(post=>(*/}
                {/*            <li key={post.id}>{post.title}</li>))*/}
                {/*    }*/}
                {/*</ul>*/}
        </>
    )
}
export default DataFetching