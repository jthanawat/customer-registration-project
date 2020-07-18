import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import classNames from 'classnames'
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Badge, Hidden, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: 'none',
    flexGrow: 1
  },
  logo: {
    margin: 'auto'
  }
}))


const TopbarForm = props => {
  const classes = useStyles();


  return (
    <AppBar className={classes.root} position="fixed">
      <Toolbar className={classes.logo}>
        <img
          alt="Logo-SynergyTechnology"
          src="/images/logos/SynergyTechnology-white.svg"
        />
        <img
          alt="Logo-Synhub"
          src="/images/logos/Synhub-White-2.svg"
        />
      </Toolbar>
    </AppBar>
  )
}

export default TopbarForm;