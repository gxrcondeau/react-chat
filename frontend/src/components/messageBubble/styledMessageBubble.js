import styled from "styled-components";

export const StyledMessageBubbleWrapper = styled.div`
    padding: 10px 20px;
    margin: ${props => props.type === "sent" ? "0 0 auto auto" : "0 auto 0 0"};
    max-width: calc(90% - 40px);
    color: ${props => props.type === "sent" ? "#ffffff" : "#000000"};
    background: ${props => props.type === "sent" 
            ? "linear-gradient(0deg, rgba(0,135,254,1) 0%, rgba(0,135,254,1) 50%, rgba(67,205,246,1) 100%)" 
            : "linear-gradient(0deg, rgba(219,220,223,1) 0%, rgba(219,220,223,1) 50%, rgba(229,230,234,1) 100%)"};
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
        border-color: transparent transparent #dbdcdf transparent;
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
        border-color: transparent transparent transparent #0087fe;
        transform: rotate(0deg);
        position: absolute;
        bottom: 0;
        right: 0;
    }
`