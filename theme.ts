import { createTheme } from "@mui/material";

export const theme = createTheme({
    typography :{
        body2: {
            color: "#F5F5F5"
        },
        button: {
            color: "#153a54"
        }
    },
    palette: {
        mode: "light",
        primary: {
            main: "#153a54",
        },
        secondary: {
            main: "#347b7c",
        },
    },
});
