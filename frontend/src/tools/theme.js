import {createTheme} from "@mui/material";

const theme = createTheme(
    {
        palette: {
            mode: "light",
            primary: {
                main: "#ffbe98",
            },
            secondary: {
                main: "#756867"
            },
            warning: {
                main: '#ffc94d',
            },
            error: {
                main: '#ee3b2b',
            },
            success: {
                main: '#52e052',
            },
        },
    }
)

export default theme;