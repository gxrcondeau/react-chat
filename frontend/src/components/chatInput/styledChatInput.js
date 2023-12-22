import styled from "styled-components";
import {Paper, Button} from "@mui/material";
import { TextareaAutosize } from '@mui/base/TextareaAutosize';

export const StyledChatInputWrapper = styled(Paper)`
    margin: 0;
    padding: 5px 10px;
    max-width: calc(100vw - 20px);
    width: 100%;
    display: flex;
    align-items: flex-end;
    column-gap: 5px;
    position: fixed;
    bottom: 0;
`

export const StyledChatInput = styled(TextareaAutosize)`
    width: 100%;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 6px 12px;
    border-radius: 12px;
    border-color: rgba(0, 0, 0, 0.23);
    transition: 0.2s;
    
    &:focus-visible {
        outline: none;
        border-color: rgba(0, 0, 0, 0.46);
    }
`

export const StyledChatInputButton = styled(Button)`
    height: 35px;
    max-width: 64px;
    width: 100%;
`