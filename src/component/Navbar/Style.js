
import { makeStyles } from "@mui/styles";
const drawerWidth = 240;

export default makeStyles((theme) => ({
  toolbar: {
    height: '80%',
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: '3px',
    [theme.breakpoints.down('sm')] : {
      marginLeft: '0',
      flexWrap: 'wrap',
    }

  },

  menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')] : {
        display: 'none'
      }
  },
  drawer:{
    [theme.breakpoints.up('sm')] : {
      width:drawerWidth,
      flexShrink: 0,
},
drawerPaper:{
  width:drawerWidth,
},
linkButton: {
'&hover':{
  color:'white !important',
  textDecoration: 'none'
}
}
  }
}))










// export default makeStyles ((theme) => ({
//     toolBar: {
//         display: 'flex',
//         justifyContent: 'center',
//         [theme.breakpoints.down('sm')] : {
//             marginLeft:' 0',
//             flexWrap: 'wrap',
//         }

//     },

//     menuBtn: {
//         marginRight: theme.spacing(2),
//         [theme.breakpoints.up('sm')] : {
//             display: 'none'
//         }
//     },
//     drawer: {
//         [theme.breakpoints.up('sm')] : {
//             width: drawerWidth,
//             flexShrink: 0,
//         },

//         drawerPaper: {
//             width: drawerWidth,
//         },
//         linkButton: {
//             '&hover': {
//                 color: 'white !important',
//                 textDecoration: 'none',


