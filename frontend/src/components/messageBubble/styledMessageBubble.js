import styled from "styled-components";

export const StyledMessageBubbleWrapper = styled.div`
    padding: 10px 20px;
    max-width: calc(90% - 40px);
    color: ${props => props.type === "sent" ? "#ffffff" : "#000000"};
    background: ${props => props.type === "sent" ? "#0087fe" : "#e5e6ea"};
    display: block;
    margin: ${props => props.type === "sent" ? "0 0 auto auto" : "0 auto 0 0"};
    border-radius: 20px;
    
`