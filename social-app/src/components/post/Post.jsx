import "./post.css"
import { MoreVert } from "@material-ui/icons"

export default function Post() {
    return (
        <div className="post" >
          <div className="postWrapper">
              <div className="postTop">
                  <div className="postTopLeft">
                      <img className="postProfileImg" src="/assets/people/1.jpg" alt=""/>
                      <span className="postUsername">Current User</span>
                      <span className="postDate">10 min ago</span>
                  </div>
                  <div className="postTopRight">
                    <MoreVert />
                  </div>
              </div>
              <div className="postCenter">
                  <span className="postText">It's my first post.</span>
                  <img className="postImg" src="assets/posts/4.jpeg" alt=""/>
              </div>
              <div className="postBottom">
                  <div className="postBottomLeft">
                      <img className="likeIcon" src="assets/1.png" alt=""/>
                      <img className="likeIcon" src="assets/2.png" alt=""/>
                      <span className="postLikeCounter">45 people like it</span>
                  </div>
                  <div className="postBottomRight">
                      <span className="postCommentText">9 comments</span>
                  </div>
              </div>
          </div>
        </div>
    )
}
