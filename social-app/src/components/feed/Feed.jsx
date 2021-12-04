import Share from "../share/Share";
import Post from "../post/Post"
import "./feed.css";
import {Posts} from "../../dummydata";
// import React, {useState} from 'react';
function Feed() {
    let DBPosts = fetch('http://localhost:9999/api/post').then((res)=res.json());
    console.log(JSON.parse(JSON.stringify(DBPosts)));
    // let [postList, postHandler] = useState(null);
    // postHandler(list);
        return (
        <div className="feed">
            <div className="feedWrapper">
                <Share/>
                {Posts.map((p)=> (
                <Post key={p.id} post={p} />
                ))} 
            </div>
        </div>
    )
}
export default Feed;