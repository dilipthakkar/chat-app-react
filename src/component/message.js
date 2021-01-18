import React from "react";
import { IsAuth } from "../auth/helper/authhelper";
import "../styles/chat.css";
// import { Container } from './styles';
function Message({ username, message, theme }) {
  const align =
    username === IsAuth().user.displayName
      ? theme.self_msg + " rightalign "
      : theme.other_msg + " leftalign ";
  const textAlignUsername =
    username === IsAuth().user.displayName
      ? "chat__message__username"
      : "chat__message__username chat__message__username__leftalign";
  const textAlignmessage =
    username === IsAuth().user.displayName
      ? "chat__message__msgtext"
      : "chat__message__msgtext chat__message__msgtext__leftalign";

  return (
    <div className={align}>
      <div className={textAlignUsername}>{username}</div>
      <div className={textAlignmessage}>{message}</div>
    </div>
  );
}

export default Message;
