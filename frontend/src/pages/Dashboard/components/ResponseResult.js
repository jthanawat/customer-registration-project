import React from 'react'
import classNames from 'classnames'
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent,Grid, Typography, Avatar } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import BallotIcon from '@material-ui/icons/Ballot';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 700
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  },
  difference: {
    marginTop: theme.spacing(2),
    display: 'flex',
    alignItems: 'center'
  },
  differenceIcon: {
    color: theme.palette.error.dark
  },
  differenceValue: {
    color: theme.palette.error.dark,
    marginRight: theme.spacing(1)
  }
}))

const ResponseResult = props => {
  const { className } = props;

  const classes = useStyles();
  return (
    <Card
    className={classNames(classes.root, className)}
  >
    <CardContent>
      <Grid
        container
        justify="space-between"
      >
        <Grid item>
          <Typography
            className={classes.title}
            color="primary"
            gutterBottom
            variant="body2"
          >
            {props.title}
          </Typography>
          <Typography variant="h3"> {props.response} </Typography>
        </Grid>
        <Grid item>
          <Avatar className={classes.avatar}>
            <BallotIcon 
            style={{color: 'white'}}
            className={classes.icon} />
          </Avatar>
        </Grid>
      </Grid>
      <div className={classes.difference}>
        <ArrowDownwardIcon className={classes.differenceIcon} />
        <Typography
          className={classes.differenceValue}
          variant="body2"
        >
          {props.percentage}
        </Typography>
        <Typography
          className={classes.caption}
          variant="caption"
        >
          {props.since}
        </Typography>
      </div>
    </CardContent>
  </Card>
  )
}

export default ResponseResult;