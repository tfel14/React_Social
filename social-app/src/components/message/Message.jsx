import "./message.css"

export default function Message({own}) {
    return (
        <div className={own ? "message own" : "message"}>
            <div className="messageTop">
                <img className="messageImg" src="assets/convo.jpg" alt=""/>
                <p className="messageText">Hello message</p>
            </div>
            <div className="messageBottom">1 hour</div>
            
        </div>
    )
}
