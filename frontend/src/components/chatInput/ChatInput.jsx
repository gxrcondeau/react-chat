import React, {useState} from "react";

import SendIcon from '@mui/icons-material/Send';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

import {StyledChatInputWrapper, StyledChatInput, StyledChatInputButton} from "./styledChatInput";

const ChatInput = () => {
    const [message, setMessage] = useState("")

    const SendMessage = () => {
        if (message !== "") {
            console.log(message)
            setMessage("");
        }
    }

    return (
        <StyledChatInputWrapper elevation={3}>
            <StyledChatInputButton disabled variant="text">
                <EmojiEmotionsIcon/>
            </StyledChatInputButton>
            <StyledChatInput onChange={(e) => setMessage(e.target.value)} value={message} id="outlined-basic" label="Message" variant="outlined" />
            <StyledChatInputButton onClick={() => SendMessage()} variant="text">
                <SendIcon/>
            </StyledChatInputButton>
        </StyledChatInputWrapper>
    )
}

export default ChatInput;
