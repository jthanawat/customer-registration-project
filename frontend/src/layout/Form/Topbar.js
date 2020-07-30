import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import classNames from 'classnames'
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Grid } from '@material-ui/core';

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
  const { className } = props
  const classes = useStyles();


  return (
    <AppBar className={classNames(classes.root, className)} position="fixed">
      <Grid
        container
        spacing={2}
        direction="row"
        justify="center"
        alignItems="center"
        xs={12} md={12} lg={12}
        >     
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
      </Grid>
    </AppBar>
  )
}

export default TopbarForm;