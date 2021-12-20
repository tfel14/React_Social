import "./post.css";
import { MoreVert } from "@material-ui/icons";
import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function Post(props) {
        let [username, setUser] = useState('');
        let [pfp, setPfp] = useState('');
    useEffect(async () => {
        let userid = props.creator;
        let userObj = await fetch(`http://localhost:9999/api/user/${userid}`).then(res=>res.json()).then(user=>user);
        setUser(userObj.username);
        setPfp(userObj.pfp);
      });
      
        
        let post = props.post;
        let currLikes = post.likes;
        let [likeCt, setLikes] = useState(currLikes);
        const likeHandler = async () => {
            let postid = post._id;
            let newLikes = await fetch(`http://localhost:9999/api/post/like/${postid}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  likes: post.likes+1
                })
            }).then((res)=>res.json()).then((post)=> post.likes);
            setLikes(newLikes);
            console.log(newLikes);
        }
        let date = props.date;
        
        return (
            <div className="post" >            
              <div className="postWrapper">
                  <div className="postTop">
                      <div className="postTopLeft">
                          <img className="postProfileImg" src={pfp} alt=""/>
                          <span className="postUsername">{username}</span>
                          <span className="postDate">{date}</span>
                      </div>
                      <div className="postTopRight">
                        <MoreVert />
                      </div>
                  </div>
                  <div className="postCenter">
                      <span className="postText">{post?.desc}</span>
                      <img className="postImg" src={post?.photo} alt=""/>
                  </div>
                  <div className="postBottom">
                      <div className="postBottomLeft">
                          <img className="likeIcon" src="/assets/1.png"  alt="" onClick={likeHandler}/>
                          <img className="likeIcon" src="/assets/2.png" alt=""/>
                          <span className="postLikeCounter">{likeCt} people like it</span>
                      </div>
                      <div className="postBottomRight">
                          <span className="postCommentText">{post?.comments} comments</span>
                      </div>
                  </div>
              </div>
            </div>
        )
    
    
}

