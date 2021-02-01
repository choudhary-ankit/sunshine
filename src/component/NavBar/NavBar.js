import React, { Component } from 'react'
import Style from './NavBar.module.css'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <AppBar position="static" className={Style.appbar}>
                    <div className={Style.app_aarng}>
                        <div>
                            {/* <IconButton edge="start" className={Style.menuButton} color="inherit" aria-label="menu">
                                <MenuIcon />
                            </IconButton> */}
                            <Link to="/" style={{textDecoration:"none", color:"white"}}>
                            <Typography variant="h6" className={Style.title}>
                                SunShine
                            </Typography>
                            </Link>
                        </div>
                        <div className={Style.btn_arrbg}>
                            <Link to="/product" style={{textDecoration:"none", color:"white"}}>
                            <Button color="inherit" className={Style.btn}>Product</Button>
                            </Link>
                        </div>
                    </div>
                </AppBar>
            </div>
        )
    }
}
