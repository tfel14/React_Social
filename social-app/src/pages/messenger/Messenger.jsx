import ChatOnline from "../../components/chatOnline/ChatOnline";
import Conversation from "../../components/conversations/Conversation";
import Message from "../../components/message/Message";
import Toppage from "../../components/toppage/Toppage";
import "./messenger.css";

export default function Messenger() {
  return (
    <>
      <Toppage />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
              <input placeholder="Search for Neighbors" className="chatMenuInput" />
              <Conversation/>
              <Conversation/>
              <Conversation/>
              <Conversation/>
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
              <div className="chatBoxTop">
                  <Message/>
                  <Message own={true}/>
                  <Message/>
              </div>
              <div className="chatBoxBottom">
                  <textarea className="chatMessageInput" placeholder="type here..."></textarea>
                  <button className="chatSubmitButton">Send</button>
              </div>
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
              <ChatOnline/>
          </div>
        </div>
      </div>
    </>
  );
}
