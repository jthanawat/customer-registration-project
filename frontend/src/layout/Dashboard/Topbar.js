import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import classNames from 'classnames'
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Hidden, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import InputIcon from '@material-ui/icons/Input';

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: 'none'
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  }
}))


const Topbar = props => {
  const { className, onSidebarOpen } = props;
  // console.log(className)
  const classes = useStyles();

  return (
    <AppBar className={classNames(classes.root, className)}>
      <Toolbar>
        <RouterLink to="/">
          <img
            alt="Logo-SynergyTechnology"
            src="/images/logos/SynergyTechnology.svg"
          />
          <img
            alt="Logo-Synhub"
            src="/images/logos/Synhub-White.svg"
          />
        </RouterLink>
        <div className={classes.flexGrow} />
        <Hidden mdDown>
          <IconButton color="inherit">

          </IconButton>
          <IconButton
            className={classes.signOutButton}
            color="inherit"
          >
            <InputIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>

    </AppBar>
  )
}

export default Topbar;