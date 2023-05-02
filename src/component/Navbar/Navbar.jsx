import React, { useState } from 'react'
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery } from '@mui/material'
import { Menu, AccountCircle, Brightness4, Brightness7, } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import useStyles from './Style'
import { useTheme } from '@emotion/react'
import { SideBar } from '../Index'



const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const classes = useStyles()
  const isMobile = useMediaQuery('(max-width: 600px)')
  const theme = useTheme()
  const isAuthenticated = true
  return (
    <>
      <AppBar position='fixed'>
          <Toolbar className={classes.toolBar}> 
          {isMobile && (
              <IconButton color='inherit'
              edge='start' style={{outline: 'none'}}
              onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              className={classes.menuBtn}>
            <Menu/>
            </IconButton>
            )
          }

           <IconButton color='inherit' sx={{ml:1}} onClick={() => {}}> 
            {theme.palatte === 'dark' ? <Brightness7/> : <Brightness4/>}
            </IconButton>

          {!isMobile && 'Search...'}

          <div>

            {!isAuthenticated ? (
              <Button color='inherit' onClick={() => {}}>
            Login &nbsp; <AccountCircle/>

            </Button>
            ):(
              <Button color='inherit'
              component = {Link} to='/profile/:id'
              className={classes.linkButton}
              onClick={() => {}}>
                {!isMobile && <>My movie &nbsp;</>}
                <Avatar style={{width: 25, height:25} }alt='Propile' src='https://bit.ly/3oEgDGp'/>
              </Button>

              
            )}
           
          </div>

          {isMobile && 'Search...'}
          </Toolbar>
      </AppBar>
      <div>
        <nav className={classes.drawer}>
              {isMobile ?  (
                <Drawer 
                  variant='temporary'
                  anchor='left'
                  open={mobileOpen}
                  onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
                  className={classes.drawerBackground}
                  classes={{paper: classes.drawerPaper}}
                  ModalProps={{keepMounted: true}}
                >
                  <SideBar setMobileOpen={setMobileOpen} />
                </Drawer>
              ) : (
                <Drawer classes={{paper: classes.drawerPaper}} variant='permanent' open>
                  <SideBar setMobileOpen={setMobileOpen} />
                </Drawer>
              )}
        </nav>
      </div>
    </>
  )     
}

export default Navbar