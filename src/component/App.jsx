import React from 'react'
import { CssBaseline } from '@mui/material'
import { Routes, Route} from 'react-router-dom';
import useStyles from './Styles.js'
import { Actors, Movies, Moviesinfo, Navbar, Profiles } from './Index.jsx';




const App = () => {

    const classes = useStyles()

    return (
    <div className={classes.root}>
        <CssBaseline/>
            <Navbar/>
            
        <main className={classes.content}>
        <div className={classes.toolBar}/>
            <Routes>
                <Route path='/movie/:id' element={<Moviesinfo/>}/>
                <Route path='/actors' element={<Actors/>}/>
                <Route path='/' element={<Movies/>}/>
                <Route path='/profile/:id' element={<Profiles/>}/>
            </Routes>
        </main>
    
       
    </div>
  )

}

export default App