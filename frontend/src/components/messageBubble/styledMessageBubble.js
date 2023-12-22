import styled from "styled-components";
import theme from "../../tools/theme"

export const StyledMessageBubbleWrapper = styled.div`
    padding: 10px 20px;
    margin: ${props => props.type === "sent" ? "0 0 auto auto" : "0 auto 0 0"};
    max-width: calc(90% - 40px);
    color: #4B424A;
    background: ${props => props.type === "sent"
            ? "linear-gradient(0deg, rgba(255,190,152,1) 0%, rgba(255,190,152,1) 50%, rgba(255,211,188,1) 100%)"
            : "linear-gradient(0deg, rgba(233,232,233,1) 0%, rgba(233,232,233,1) 50%, rgba(144,134,133,0.12) 100%)"};
    display: block;
    position: relative;
    border-radius: 20px;

    &:before {
        content: "";
        width: 0;
        height: 0;
        display: ${props => props.type === "sent" ? "none" : "block"};
        border-style: solid;
        border-width: 0 0 16px 16px;
        border-color: transparent transparent #e9e8e9 transparent;
        transform: rotate(0deg);
        position: absolute;
        bottom: 0;
        left: 0;
    }

    &:after {
        content: "";
        width: 0;
        height: 0;
        display: ${props => props.type === "sent" ? "block" : "none"};
        border-style: solid;
        border-width: 16px 0 0 16px;
        border-color: transparent transparent transparent #ffbe98;
        transform: rotate(0deg);
        position: absolute;
        bottom: 0;
        right: 0;
    }
`