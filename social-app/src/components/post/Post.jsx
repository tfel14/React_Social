import "./post.css";
import { MoreVert } from "@material-ui/icons";
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
export default function Post(props) {
        let [username, setUser] = useState('');
        let [pfp, setPfp] = useState('');
        let post = props.post;
        let navigate = useNavigate();
    useEffect(async () => {
        let userid = props.creator;
        let userObj = await fetch(`http://localhost:9999/api/user/${userid}`).then(res=>res.json()).then(user=>user);
        setUser(userObj.username);
        setPfp(userObj.pfp);
      });
      
        
        let currLikes = post.likes;
        let [likeCt, setLikes] = useState(currLikes);
        let showDropdown = false;
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

        const deleteHandler = async () => {
            let postid = post._id;
            await fetch(`http://localhost:9999/api/post/delete/${postid}`, {
                method: 'DELETE',
                // headers: { 'Content-Type': 'application/json' },
                // body: JSON.stringify({
                //   likes: post.likes+1
                // })
            }).then(()=>window.location.reload(false));
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
                      <div className="postTopRight" onClick={(e)=>{
                        let dropdown = document.getElementById('dropdown-options');
                        if(showDropdown === false){
                            dropdown.style.display = 'block'
                            showDropdown = true;
                        } else {
                            dropdown.style.display = 'none'
                            showDropdown = false;
                        }
                      }}>
                            <MoreVert/>
                            <div className="dropdown-content" id="dropdown-options" style={{display: 'none'}}>
                                <a>Edit</a>
                                <a onClick={deleteHandler}>Delete</a>
                            </div>
                            
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

