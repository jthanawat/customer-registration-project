import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import classNames from 'classnames'
import { makeStyles } from '@material-ui/styles';
import { Avatar, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content'
  },
  avatar: {
    width: 60,
    height: 60
  },
  name: {
    marginTop: theme.spacing(1)
  },
  body: {
    color: theme.palette.primary.main
  }
}));

const Profile = props => {
  const { className } = props;
  const classes = useStyles();

  const user = {
    name: 'Admin01',
    avatar: '/images/avatars/avatar_1.jpg',
    firstName: 'Thanawat',
    lastName: 'J.'
  };

  return (
    <div className={classNames(classes.root, className)}>
      <Avatar
      alt="Admin"
      className={classes.avatar}
      src={user.avatar}
      to="/settings"
      />

      <Typography
      className={classes.name}
      variant="h4">
        {user.name}
      </Typography>
      <Typography 
      className={classes.body}
      variant="body1">{user.firstName} {user.lastName}</Typography>
      
    </div>
  )
}
export default Profile;