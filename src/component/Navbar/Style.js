import { makeStyles } from "@mui/styles";


const drawerWidth = 240;

export default makeStyles ((theme) => ({
    toolBar: {
        height: '80%',
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')] : {
            marginLeft:' 0',
            flexWrap: 'wrap',
        }

    },

    menuBtn: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.down('sm')] : {
            display: 'none',
            
        }
    },
    drawer: {
        [theme.breakpoints.up('sm')] : {
            width: drawerWidth,
            flexShrink: 0,
        },

        drawerPaper: {
            width: drawerWidth,
        },
        linkButton: {
            '&hover': {
                color: 'white !important',
                textDecoration: 'none',
            }
        }
    }


})) 

