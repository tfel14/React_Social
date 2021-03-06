import Share from "../share/Share";
import Post from "../post/Post"
import "./feed.css";
import React, {Component} from 'react';
class Feed extends Component {
    constructor(){
        super();
        this.state = {posts: [], mappedPosts: []}
    }
    async componentDidMount() {
        let DBPosts = await fetch('http://localhost:9999/api/post').then((res)=>res.json());
        this.setState({ data: DBPosts });
        let postList = this.state.data;
        if(postList !== undefined){
            this.setState({
                mappedPosts: (postList.map((p)=> (
                <Post key={p.id} post={p} creator={p.userid} date={p.date}/>
            ))).reverse()
        })
        }
    }
    
    render(){
        let mappedPostList = this.state.mappedPosts;
            return (
            <div className="feed">
                <div className="feedWrapper">
                    <Share/>
                    {mappedPostList}
                </div>
            </div>
        )
    }
    
}
export default Feed;