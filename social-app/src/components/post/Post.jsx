import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../dummydata";
import React, {Component, useRef} from 'react';


class Post extends Component {
    constructor(){
        super();
        this.state = {like: 0, isLiked: false, users: []}
    }
    async componentDidMount(){
        let users = await fetch('http://localhost:9999/api/post').then((res)=>res.json());
        this.setState({users});
    }
    render(){
        let post = this.props.post;
        // const [like,setLike] = useState(post.like)
        // const [isLiked,setIsLiked] = useState(false)
        console.log(post);
        const likeHandler = ()=>{
            this.setState({
                like: this.state.isLiked ? this.like-1 : this.like + 1
            })
            this.setState({isLiked: false})
        }
        let userList = this.state.users;
        return (
            <div className="post" >
              <div className="postWrapper">
                  <div className="postTop">
                      <div className="postTopLeft">
                          <img className="postProfileImg" src={userList.filter((u) => u._id === post?.userid).pfp} alt=""/>
                          <span className="postUsername">{userList.filter((u) => u._id === post?.userid).username } </span>
                          <span className="postDate">{post?.date}</span>
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
                          <img className="likeIcon" src="/assets/1.png" onClick={likeHandler} alt=""/>
                          <img className="likeIcon" src="/assets/2.png" onClick={likeHandler} alt=""/>
                          <span className="postLikeCounter">{this.state.like} people like it</span>
                      </div>
                      <div className="postBottomRight">
                          <span className="postCommentText">{post?.comments} comments</span>
                      </div>
                  </div>
              </div>
            </div>
        )
    }
    
}
export default Post;