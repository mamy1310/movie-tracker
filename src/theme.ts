import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#CFB53B',
        },
        background: {
            default: '#181818',
            paper: '#232323',
        },
        text: {
            primary: '#fff',
            secondary: '#bbb',
        },
    },
    typography: {
        fontFamily: 'Inter, Roboto, Arial, sans-serif',
    },
});

export default theme;
