import React from "react"

import {Container, Toolbar, Typography} from "@mui/material";
import TelegramIcon from '@mui/icons-material/Telegram';
import {StyledTopBar} from "./styledTopBar";

const TopBar = () => {
    return (
        <StyledTopBar>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <TelegramIcon/>
                    <Typography
                        variant="h6"
                        noWrap
                    >
                        React Chat
                    </Typography>
                </Toolbar>
            </Container>
        </StyledTopBar>
    )
}

export default TopBar;