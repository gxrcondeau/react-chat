import React from "react";
import {StyledMessageBubbleWrapper} from "./styledMessageBubble";

const MessageBubble = ({type, message}) => {
    return(
        <StyledMessageBubbleWrapper type={type}>
            {message}
        </StyledMessageBubbleWrapper>
    )
}

export default MessageBubble;