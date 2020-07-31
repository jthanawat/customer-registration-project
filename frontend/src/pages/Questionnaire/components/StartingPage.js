import React from 'react'
import { makeStyles, useTheme } from '@material-ui/styles';
import { Typography, Paper, Grid, Button, Box } from '@material-ui/core';
import TopbarForm from '../../../layout/Form/Topbar';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  contentBody: {
    display: 'flex',
    marginTop: 100,
    marginBottom: 100
  },
  wrapper: {
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 125,
    width: 800,
    height: 200
  },
  title: {
    marginTop: theme.spacing(3),
    textAlign: 'center'
  },
  button: {
    minWidth: 100,
    display: 'block',
    margin: 'auto',
    marginTop: theme.spacing(6),
  },
  
}));

const LandingPage = props => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TopbarForm />
      <div className={classes.content}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center">
          <div className={classes.contentBody}>
            <Paper>
              <Grid item xs={12} md={12} lg={12} 
              className={classes.wrapper}>
                <Grid>
                  <Typography variant="h3"
                  className={classes.title}>
                    Visitor Application Form
                  </Typography >
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                  <Typography
                    variant="h6"
                    className={classes.title}
                    >
                    Please fill your form accurately.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                  <Button 
                  className={classes.button} 
                  variant="contained" 
                  color="primary"
                  >
                    Start
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </Grid>
      </div>
    </div >
  )
}

export default LandingPage;