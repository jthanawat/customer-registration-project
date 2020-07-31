import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import ResponseResult from './components/ResponseResult'
import TotalResponse from './components/TotalResponses'
import CustomerRatio from './components/CustomerRatio'
import PurposeRatio from './components/PurposeRatio'
import ProductRatio from './components/ProductRatio'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          xl={3}
          lg={3}
          sm={6}
          xs={12}
        >
          <ResponseResult title="ALL RESPONSES" response="1000" since="Since Last Month" percentage="5%" />
        </Grid>
        <Grid
          item
          xl={3}
          lg={3}
          sm={6}
          xs={12}
        >
          <ResponseResult title="ALL RESPONSES" response="200" since="Since Last Week" percentage="8%" />
        </Grid>
        <Grid
          item
          xl={3}
          lg={3}
          sm={6}
          xs={12}
        >
          <ResponseResult title="ALL RESPONSES" response="15" since="Today" percentage="12%" />
        </Grid>
        <Grid
          item
          xl={3}
          lg={3}
          sm={6}
          xs={12}
        >
          <TotalResponse />
        </Grid>
          <Grid
            item
            xl={6}
            lg={6}
            md={12}
            xs={12}
          >
            <CustomerRatio />
          </Grid>
          <Grid
            item
            xl={6}
            lg={6}
            md={12}
            xs={12}
          >
            <PurposeRatio />
          </Grid>
          <Grid
            item
            xl={12}
            lg={12}
            md={12}
            xs={12}
          >
            <ProductRatio />
          </Grid>
      </Grid>
    </div>
  )
}

export default Dashboard;