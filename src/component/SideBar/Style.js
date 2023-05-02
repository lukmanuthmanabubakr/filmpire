// import { Padding } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

export default makeStyles ((theme) => ({
    imageLink: {
        display: 'flex',
        justifyContent: 'center',
        padding: '10% 0'
    },
    image: {
        width: '70%',
    },
    links: {
        textDecoration: 'none',
        color: theme.palette.text.primary,
    },
    genreImages: {
        filter: theme.palette.mode === 'dark' ? 'dark' : 'Invert(1)',
    }
}))