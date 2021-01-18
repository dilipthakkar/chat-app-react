import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { IsAuth, singout } from "../auth/helper/authhelper";
import { DB } from "../services/firebase";
import firebase from "firebase/app";
import SendIcon from "@material-ui/icons/Send";
import Select from "@material-ui/core/Select";
import "../styles/themes/themes1.css";
import "../styles/themes/theme2.css";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import "../styles/chat.css";
import Message from "./message";
import { MenuItem } from "@material-ui/core";
import { getTheme } from "../themeselector/themeselector";

function Chat() {
  // use for push history and nevigate
  const history = useHistory();
  // use for check and get user
  const user = IsAuth().user;
  // messages list
  const [msglist, setMsglist] = useState([]);
  // input text field
  const [textfield, setTextfield] = useState("");
  // themes and initialize with default theme classes
  const [theme, setTheme] = useState({
    mainchatscreen: "chat__chatscreen",
    mainchatslist: "chat__msglist",
    self_msg: "chat__message",
    other_msg: "chat__message_left",
  });
  // set theme number for show in select box
  const [themenum, setThemenum] = useState(0);

  // send message with firestore DB
  const sendMsg = (message) => {
    DB.collection("messages").add({
      message: textfield,
      timestamp: firebase.firestore.Timestamp.fromDate(new Date()),
      user: user.displayName,
    });
    // empty textfield after sending message
    setTextfield("");
  };

  // for input text field
  const onHandleChange = (event) => {
    setTextfield(event.target.value);
  };

  // for select box
  const onSelectTheme = (event) => {
    setThemenum(event.target.value);
    setTheme(getTheme(event.target.value));
  };

  useEffect(() => {
    // load all data from firestore while loading component
    DB.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        const dataList = snapshot.docs.map((doc) => {
          return { messageinfo: doc.data() };
        });
        setMsglist(dataList);
      });
  }, []);

  // logout a user
  const logout = () => {
    singout();
    history.push("/");
  };

  return (
    <div className="chat__container">
      <div className={theme.mainchatscreen} id="chatscreen">
        <div className="header">
          <div className="chat__welcomemsg">
            <div> welcome </div> <div> {user.displayName} </div>{" "}
          </div>{" "}
          <Select
            onChange={onSelectTheme}
            className="chat__selectoption"
            value={themenum}
          >
            <MenuItem value={0}> Default </MenuItem>{" "}
            <MenuItem value={1}> Theme1 </MenuItem>{" "}
            <MenuItem value={2}> Theme2 </MenuItem>{" "}
          </Select>{" "}
          <PowerSettingsNewIcon
            onClick={() => {
              logout();
            }}
            className="chat__logoutbtn "
          />
        </div>{" "}
        <div className={theme.mainchatslist}>
          {" "}
          {msglist.map((item) => (
            <Message
              username={item.messageinfo.user}
              message={item.messageinfo.message}
              theme={theme}
            />
          ))}{" "}
        </div>{" "}
        <div className="chat__inputfield">
          <input
            className="chat__inputfield__text"
            value={textfield}
            onChange={onHandleChange}
          />{" "}
          <Button
            className="chat__inputfield__sendbtn"
            variant="contained"
            color="primary"
            disabled={!textfield}
            endIcon={<SendIcon />}
            onClick={() => {
              sendMsg("myname");
            }}
          >
            Send{" "}
          </Button>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Chat;
