import React, { useEffect, useState } from "react";
import LeftChatBubble from "./LeftChatBubble";
import { useDispatch } from "react-redux";
import RightChatBubble from "./RightChatBubble";
import MessageInput from "./MessageInput";
import { addNewMessage } from "../../actions/contact";
import ProfileHeader from "../LeftSidebar/ProfileHeader";
function MessageBox(props) {
  const [chat, setChat] = useState([]);
  const [length, setLength] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    setChat(props.user.chatlog);
    setLength(props.user.chatlog.length);
  }, [props]);
  let updateMesssages = (message) => {
    let object = {
      text: message,
      timestamp: "12:00",
      sender: "me",
      message_id: length + 1,
    };
    dispatch(addNewMessage(object, props.user.id));
    // updatelength
    setLength(object.message_id);

    setChat([...chat, object]);
  };

  return (
    <>
      <div className="message-box">
        <div className="message-box-header" xs={6} sm={7} md={8} lg={7} xl={8}>
          <ProfileHeader user={props.user} />
        </div>
        {chat.length === 0 && (
          <p className="no-message-alert">NO MESSAGES FOUND</p>
        )}
        {chat.length > 0 && (
          <div className="messages-section">
            {chat.map((m, index) =>
              m.sender === "me" ? (
                <RightChatBubble
                  message={m}
                  key={index}
                  name={"Shaktiman"}
                  image={
                    "data:image/jpeg;base64,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"
                  }
                />
              ) : (
                <LeftChatBubble
                  message={m}
                  key={index}
                  name={props.user.name}
                  image={props.user.image}
                />
              )
            )}
          </div>
        )}

        <MessageInput newMessageHandler={updateMesssages} user={props.user} />
      </div>
    </>
  );
}

export default MessageBox;
