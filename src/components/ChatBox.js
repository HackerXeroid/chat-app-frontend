import "./ChatBox.css";

function ChatBox(props) {
  return (
    <div className={`${props.whose}-chat`}>
      <div>{props.chat}</div>
    </div>
  );
}

export default ChatBox;
