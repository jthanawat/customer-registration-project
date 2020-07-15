import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import classNames from 'classnames'
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar } from '@material-ui/core';

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


const TopbarMain = props => {
  const {className} = props;
  console.log(className)
  const classes = useStyles();


  return(
    <AppBar className={classNames(classes.root)}>
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
      </Toolbar>
    </AppBar>
  )
}

export default TopbarMain;