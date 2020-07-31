import React from 'react'
import { makeStyles, Icon, Grid, IconButton, Typography } from '@material-ui/core'
import {
  Card,
  CardContent
} from '@material-ui/core'
import CheckCircleSharpIcon from '@material-ui/icons/CheckCircleSharp';
import TopbarForm from '../../../layout/Form/Topbar'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    padding: theme.spacing(10)
  },
  card: {
    textAlign: 'center',
    width: '400px',
  },
  icon: {
    color: theme.palette.primary.main,
  }
}))

const FinishedPage = () => {
  const classes = useStyles();

  return (
    <div
      className={classes.root}>
      <TopbarForm />
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid
          item xs={12} md={12} lg={12}
        >

          <Card
            className={classes.card}
          >
            <CardContent
            >
              <Typography
                variant="h5"
              >
                Thank you for taking your time
              </Typography>
            </CardContent>
            <CardContent>
              <Typography
                variant="h5"
              >
                to complete our survey!
              </Typography>
            </CardContent>
            <IconButton
              className={classes.icon}

            >
              <CheckCircleSharpIcon
                fontSize='large'
              />
            </IconButton>
          </Card>

        </Grid>
      </Grid>
    </div>
  )
}


export default FinishedPage;