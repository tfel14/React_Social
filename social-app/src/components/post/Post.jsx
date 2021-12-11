import "./post.css";
import { MoreVert } from "@material-ui/icons";
import React, {Component} from 'react';

class Post extends Component {
    constructor(){
        super();
        this.state = {like: 0, isLiked: false, users: []}
    }
    async componentDidMount(){
        let users = await fetch('http://localhost:9999/api/user/').then((res)=>res.json());
        if(users != null)
        this.setState({users});
    }
    render(){
        let post = this.props.post;
        // const [like,setLike] = useState(post.like)
        // const [isLiked,setIsLiked] = useState(false)
        const likeHandler = ()=>{
            // this.setState({
            //     like: this.like+1
            // })
            // this.setState({isLiked: true})
            this.setState({like: this.like + 1})
            console.log(this.state.like);
        }
        let userList = this.state.users;
        let userid = this.props.creator;
        let matchingUser;
        if(userList.length > 0)
        matchingUser = userList.find((u)=>{return u._id===userid});
        let date = this.props.date;
        let username;
        let pfp;
        let state = this.state;
        if(matchingUser !== undefined){
            username = matchingUser.username;
            pfp = matchingUser.pfp;
        }else {
            if(userList.length > 0)
            console.log(userList);
        }
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
                      {/* <img className="postImg" src={post?.photo} alt=""/> */}
                  </div>
                  <div className="postBottom">
                      {/* <div className="postBottomLeft">
                          <img className="likeIcon" src="/assets/1.png" onClick={likeHandler} alt=""/>
                          <img className="likeIcon" src="/assets/2.png" onClick={likeHandler} alt=""/>
                          <span className="postLikeCounter">{state?.like} people like it</span>
                      </div> */}
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