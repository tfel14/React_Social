import "./share.css";
import { PermMedia, Label,Room,EmojiEmotions, Cancel } from "@material-ui/icons";
import React, {useState, useRef} from 'react';
import {useCookies} from 'react-cookie';
import { useNavigate } from "react-router-dom";
var shortUrl = require('node-url-shortener');



function Share() {
  const [file, setFile] = useState(null);

  let [postDesc, setDesc] = useState(null);
  let navigate = useNavigate();
  let cookie = useCookies(['user'])[0];
  let [fileURL, setFileURL] = useState(null);
  if(file){
    const reader = new FileReader();
    reader.onloadend = () => {
      // log to console
      // logs data:<type>;base64,wL2dvYWwgbW9yZ...
      setFileURL(reader.result);
      console.log(fileURL);
    };
    reader.readAsDataURL(file);
  }
  // fileURL = reader.result;
  // console.log(fileURL);

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
        {file && fileURL && (
          <div className="shareImgContainer">
            <img className="shareImg" src={fileURL} alt=""/>
            <Cancel className="shareCancelImg" onClick={()=>setFile(null)}/>
            
          </div>
        )}
        <div className="shareBottom">
          <div className="shareOptions">
            <label htmlFor="file"  className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
              <input style={{display: "none"}}type="file" id="file" accept=".png,.jpeg,.jpg,.jfif" onChange={(e)=>setFile(e.target.files[0])} />
            </label>
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
            console.log(file);
            
            let url = 'http://localhost:9999/api/post/share';
              let data = JSON.stringify({
                postPhoto: fileURL,
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
              window.location.reload(false);
          })
          }}>Share</button>
        </div>
      </div>
    </div>
  );
}
export default Share;