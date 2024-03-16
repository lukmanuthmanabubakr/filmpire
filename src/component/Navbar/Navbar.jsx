
import React, { useState, useEffect } from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Drawer,
  Button,
  Avatar,
  useMediaQuery,
} from "@mui/material";
import {
  Menu,
  AccountCircle,
  Brightness4,
  Brightness7,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { SideBar, Search } from '../Index';
import useStyles from "./Style";
import { useTheme } from "@mui/material/styles";
import { fetchToken, createSessionId, moviesApi } from "../../Utils/Index";
import { useDispatch, useSelector } from "react-redux";
import { setUser, userSelector } from "../../Features/auth";

const NavBar = () => {
  const { isAuthenticated, user } = useSelector(userSelector);
  const [mobileOpen, setMobileOpen] = useState(false);
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width: 600px)");
  const theme = useTheme();
  const dispatch = useDispatch();
  // const isAuthenticated = false;

  // console.log(user);
  const token = localStorage.getItem("request_token");
  const sessionIdFromLocalStorage = localStorage.getItem("session_id");

  useEffect(() => {
    const logInUser = async () => {
      if (token) {
        if (sessionIdFromLocalStorage) {
          const { data: userData } = await moviesApi.get(
            `/account?session_id=${sessionIdFromLocalStorage}`
          );
          dispatch(setUser(userData));
        } else {
          const sessionId = await createSessionId();
          const { data: userData } = await moviesApi.get(
            `/account?session_id=${sessionId}`
          );

          dispatch(setUser(userData));
        }
      }
    };
    logInUser();
  }, [token]);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              style={{ outline: "none" }}
              onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              className={classes.menuButton}
            >
              <Menu />
            </IconButton>
          )}

          <IconButton color="inherit" sx={{ ml: 1 }} onClick={() => {}}>
            {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>

          {!isMobile && <Search />}
          <div>
            {!isAuthenticated ? (
              <Button color="inherit" onClick={fetchToken}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button
                color="inherit"
                component={Link}
                to={`/profile/${user.id}`}
                className={classes.linkButton}
                onClick={() => {}}
              >
                {!isMobile && <>My Movies &nbsp;</>}
                <Avatar
                  style={{ width: 30, height: 30 }}
                  alt="Profile"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpWvXdcjNuTkrkDCYKZRtWwZ-emiiDJdP6sUb7VRshRA&s"
                />
              </Button>
            )}
          </div>
          {isMobile && <Search />}
        </Toolbar>
      </AppBar>
      <div>
        <nav className={classes.drawer}>
          {isMobile ? (
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              classes={{ paper: classes.drawerPaper }}
              ModalProps={{ keepMounted: true }}
            >
              <SideBar setMobileOpen={setMobileOpen} />
            </Drawer>
          ) : (
            <Drawer
              classes={{ paper: classes.drawerPaper }}
              variant="permanent"
              open
            >
              <SideBar setMobileOpen={setMobileOpen} />
            </Drawer>
          )}
        </nav>
      </div>
    </>
  );
};

export default NavBar;






















// import React, { useEffect, useState } from 'react'
// import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery } from '@mui/material'
// import { Menu, AccountCircle, Brightness4, Brightness7, } from '@mui/icons-material'
// import { Link } from 'react-router-dom'
// import useStyles from './Style'
// import { useTheme } from '@emotion/react'
// import { SideBar, Search } from '../Index'
// import { fetchToken, createSessionId, moviesApi } from '../../Utils/Index';
// import { useDispatch, useSelector } from 'react-redux';
// import { setUser, userSelector } from '../../Features/auth'
// import { create } from '@mui/material/styles/createTransitions'


// const Navbar = () => {
//   const { isAuthenticated, user } = userSelector(userSelector)
//   const [mobileOpen, setMobileOpen] = useState(false)
//   const classes = useStyles()
//   const dispatch = useDispatch()
//   const isMobile = useMediaQuery('(max-width: 600px)')
//   const theme = useTheme()
//   // const isAuthenticated = false
//   console.log(user);
//   const token = localStorage.getItem('request_token');
//   const sessionIdFromLocalStorage = sessionStorage.getItem('session_id');

//   useEffect(() => {
//     const logInUser = async () => {
//        if(token) {
//         if(sessionIdFromLocalStorage){
//           const{data:userData} = await moviesApi.get(`/account?session_id=${sessionIdFromLocalStorage}`);

//           dispatch(setUser(userData))
//         }else {
//           const sessionId = await createSessionId();
//           const{data:userData} = await moviesApi.get(`/account?session_id=${sessionId}`);
//          }
//        }
//     }
//   })
//
//             {!isAuthenticated ? (
//               <Button color='inherit' onClick={fetchToken}>
//             Login &nbsp; <AccountCircle/>

//             </Button>
//             ):(
//               <Button color='inherit'
//               component = {Link} to='/profile/:id'
//               className={classes.linkButton}
//               onClick={() => {}}>
//                 {!isMobile && <>My movie &nbsp;</>}
//                 <Avatar style={{width: 25, height:25} }alt='Propile' src='https://bit.ly/3oEgDGp'/>
//               </Button>

              
//             )}
           
//           </div>

//           {isMobile && <Search/>}
//           </Toolbar>
//       </AppBar>
//       <div>
//         <nav className={classes.drawer}>
//               {isMobile ?  (
//                 <Drawer 
//                   variant='temporary'
//                   anchor='left'
//                   open={mobileOpen}
//                   onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
//                   className={classes.drawerBackground}
//                   classes={{paper: classes.drawerPaper}}
//                   ModalProps={{keepMounted: true}}
//                 >
//                   <SideBar setMobileOpen={setMobileOpen} />
//                 </Drawer>
//               ) : (
//                 <Drawer classes={{paper: classes.drawerPaper}} variant='permanent' open>
//                   <SideBar setMobileOpen={setMobileOpen} />
//                 </Drawer>
//               )}
//         </nav>
//       </div>
//     </>
//   )     
// }

// export default Navbar