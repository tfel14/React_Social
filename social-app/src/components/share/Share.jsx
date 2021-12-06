import "./share.css";
import { PermMedia, Label,Room,EmojiEmotions } from "@material-ui/icons";
import React, {useState} from 'react';
import {useCookies} from 'react-cookie';
import { useNavigate } from "react-router-dom";
// import axios from "axios";

function Share() {
  let [postDesc, setDesc] = useState('');
  let navigate = useNavigate();
  let cookie = useCookies(['user'])[0];
  // let [postImg, setImgSrc] = useState('');
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src={cookie.user.pfp} alt="" />
          <input
            placeholder="Who's business you minding today?"
            className="shareInput" id="postDesc" value={postDesc} onChange={(e)=>setDesc(e.target.value)}
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="gold" className="shareIcon" />
              <span className="shareOptionText">Feeling</span>
            </div>
          </div>
          <button className="shareButton" onClick={()=>{
            let userCookie = cookie.user;
            let url = 'http://localhost:9999/api/post/share';
              let data = JSON.stringify({
                postDesc,
                userCookie
              });
              let resources = {
                  method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: data,
              }
              return fetch(url, resources)
              .then(res=>{
                
                return res.json();
            }).then(post => {
              console.log(post); 
              navigate('/');
          })
          }}>Share</button>
        </div>
      </div>
    </div>
  );
}
export default Share;