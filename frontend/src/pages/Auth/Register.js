import React, { useState, useEffect } from 'react'
import { Link as RouterLink, withRouter } from 'react-router-dom';
import validate from 'validate.js';
import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  Button,
  TextField,
  Link,
  Typography,
  Checkbox,
  FormHelperText,
  Card,
  CardContent,
} from '@material-ui/core';

const constraints = {
  firstName: {
    presence: {
      allowEmpty: false,
      message: 'is required'
    },
    length: {
      maximum: 32
    }
  },
  lastName: {
    presence: {
      allowEmpty: false,
      message: 'is required'
    },
    length: {
      maximum: 32
    }
  },
  email: {
    presence: {
      allowEmpty: false,
      message: 'is required'
    },
    email: true,
    length: {
      maximum: 64
    }
  },
  password: {
    presence: {
      allowEmpty: false,
      message: 'is required'
    },
    length: {
      maximum: 128
    }
  },
  policy: {
    presence: {
      allowEmpty: false,
      message: 'is required'
    },
    checked: true
  }
};

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: '100%'
  },
  grid: {
    height: '100%'
  },
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  contentHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
  contentBody: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: 1000,
    height: 700,
    margin: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      height: '100%',
      width: '100%',
      margin: theme.spacing(0),
    }
  },
  form: {
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 125,
    flexBasis: 700,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }
  },
  title: {
    marginTop: theme.spacing(8)
  },
  textField: {
    marginTop: theme.spacing(2)
  },
  policy: {
    marginTop: theme.spacing(1),
    display: 'flex',
    alignItems: 'center'
  },
  policyCheckbox: {
    marginLeft: '-14px'
  },
  signUpButton: {
    margin: theme.spacing(2, 0),
  }
}));

const Register = props => {
  const { history } = props;

  const classes = useStyles();

  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  })

  useEffect(() => {
    const errors = validate(formState.values, constraints);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }));

  }, [formState.values])

  const handleChange = (e) => {
    e.persist();

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [e.target.name]:
          e.target.type === 'checkbox'
            ? e.target.checked
            : e.target.value
      },
      touched: {
        ...formState.touched,
        [e.target.name]: true
      }
    }))
  }

  const handleSignUp = e => {
    e.preventDefault();
    history.push('login')
  }

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <div className={classes.root}>
      <Grid
        className={classes.grid}
        container
      >
        <Grid
          className={classes.content}
          item
          lg={12}
          xs={12}
        >
          <div className={classes.content}>
            <div className={classes.contentBody}>
              <Card className={classes.card}>
                <CardContent>
                  <form
                    className={classes.form}
                    onSubmit={handleSignUp}
                  >
                  <div className={classes.contentHeader}>
                    <img
                      alt="Logo-SynergyTechnology"
                      src="/images/logos/SynergyTechnology.svg"
                    />
                    <img
                      alt="Logo-Synhub"
                      src="/images/logos/Synhub-black.svg"
                    />
                  </div>
                    <Typography
                      className={classes.title}
                      variant="h2"
                    >
                      Create new account
                    </Typography>
                    <Typography
                      color="textSecondary"
                      gutterBottom
                    >
                      Use your email to create new account
                    </Typography>
                    <TextField
                      className={classes.textField}
                      error={hasError('firstName')}
                      fullWidth
                      helperText={
                        hasError('firstName') ? formState.errors.firstName[0] : null
                      }
                      label="First name"
                      name="firstName"
                      onChange={handleChange}
                      type="text"
                      value={formState.values.firstName || ''}
                      variant="outlined"
                    />
                    <TextField
                      className={classes.textField}
                      error={hasError('lastName')}
                      fullWidth
                      helperText={
                        hasError('lastName') ? formState.errors.lastName[0] : null
                      }
                      label="Last name"
                      name="lastName"
                      onChange={handleChange}
                      type="text"
                      value={formState.values.lastName || ''}
                      variant="outlined"
                    />
                    <TextField
                      className={classes.textField}
                      error={hasError('email')}
                      fullWidth
                      helperText={
                        hasError('email') ? formState.errors.email[0] : null
                      }
                      label="Email address"
                      name="email"
                      onChange={handleChange}
                      type="text"
                      value={formState.values.email || ''}
                      variant="outlined"
                    />
                    <TextField
                      className={classes.textField}
                      error={hasError('password')}
                      fullWidth
                      helperText={
                        hasError('password') ? formState.errors.password[0] : null
                      }
                      label="Password"
                      name="password"
                      onChange={handleChange}
                      type="password"
                      value={formState.values.password || ''}
                      variant="outlined"
                    />
                    <div className={classes.policy}>
                      <Checkbox
                        checked={formState.values.policy || false}
                        className={classes.policyCheckbox}
                        color="primary"
                        name="policy"
                        onChange={handleChange}
                      />
                      <Typography
                        className={classes.policyText}
                        color="textSecondary"
                        variant="body1"
                      >
                        I have read the{' '}
                        <Link
                          color="primary"
                          component={RouterLink}
                          to="#"
                          underline="always"
                          variant="h6"
                        >
                          Terms and Conditions
                    </Link>
                      </Typography>
                    </div>
                    {hasError('policy') && (
                      <FormHelperText error>
                        {formState.errors.policy[0]}
                      </FormHelperText>
                    )}
                    <Button
                      className={classes.signUpButton}
                      color="primary"
                      disabled={!formState.isValid}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                    >
                      Sign up now
                    </Button>
                    <Typography
                      color="textSecondary"
                      variant="body1"
                    >
                      Have an account?{' '}
                      <Link
                        component={RouterLink}
                        to="/login"
                        variant="h6"
                      >
                        Sign in
                      </Link>
                    </Typography>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Register;