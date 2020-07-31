import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import FormCard from './components/FormCard'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Forms = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          xl={4}
          lg={4}
          md={6}
          sm={6}
          xs={12}
        >

          <FormCard title="FORM 1" />
        </Grid>

        <Grid
          item
          xl={4}
          lg={4}
          md={6}
          sm={6}
          xs={12}
        >

          <FormCard title="FORM 2" />
        </Grid>
        <Grid
          item
          xl={4}
          lg={4}
          md={6}
          sm={6}
          xs={12}
        >

          <FormCard title="FORM 3" />
        </Grid>

      </Grid>
    </div>
  )
}

export default Forms;