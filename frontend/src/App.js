import './App.css';
import ChatPage from "./pages/chat/ChatPage";
import TopBar from "./components/topBar/TopBar";
import {ThemeProvider} from "@mui/material";

import theme from "./tools/theme";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <TopBar/>
            <ChatPage/>
        </ThemeProvider>
    );
}

export default App;
