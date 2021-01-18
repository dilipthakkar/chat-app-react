// return name of classes depends on theme 
export const getTheme = (theme) => {
    if (theme == 0) {
        return {
            mainchatscreen: "chat__chatscreen",
            mainchatslist: "chat__msglist",
            self_msg: "chat__message",
            other_msg: "chat__message_left",
        }
    }
    if (theme == 1) {
        return {
            mainchatscreen: "chat__chatscreen_theme1",
            mainchatslist: "chat__msglist_theme1",
            self_msg: "chat__message_theme1",
            other_msg: "chat_message_left_theme1",
        }
    }
    if (theme == 2) {
        return {
            mainchatscreen: "chat__chatscreen_theme2",
            mainchatslist: "chat__msglist_theme2",
            self_msg: "chat__message_theme2",
            other_msg: "chat_message_left_theme2",
        }
    }
}