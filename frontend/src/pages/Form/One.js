import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  Button,
  IconButton,
  TextField,
  Link,
  FormHelperText,
  Checkbox,
  Typography,
  Paper,
  Divider,
  MenuItem,
  InputLabel,
  Select,
  FormControl
} from '@material-ui/core';
import TopbarFrom from '../../layout/Form/Topbar'
import WebcamCapture from './WebcamCapture'

const schema = {
  firstName: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 32
    }
  },
  lastName: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 32
    }
  },
  email: {
    presence: { allowEmpty: false, message: 'is required' },
    email: true,
    length: {
      maximum: 64
    }
  },
  companyName: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 128
    }
  },
  place: {
    presence: { allowEmpty: false, message: 'is required' },
    displayEmpty: true
  }
};

const places = [
  {
    value: 'SynergyTechnology',
    label: 'Synegy Technology'
  },
  {
    value: 'SynHub',
    label: 'Syn Hub'
  }]

const purposes = [
  {
    value: 'Workshop',
    label: 'Workshop'
  },
  {
    value: 'CodeCamp',
    label: 'CodeCamp'
  },
  {
    value: 'Cafe',
    label: 'Cafe'
  },
  {
    value: 'Other',
    label: 'Other'
  }]

const products = [
  {
    value: 'EduTech Workshops',
    label: 'EduTech Workshops'
  },
  {
    value: 'Energy Management System',
    label: 'Energy Management System'
  },
  {
    value: 'PCB/PCBA',
    label: 'PCB/PCBA'
  },
  {
    value: 'Robotics',
    label: 'Robotics'
  },
  {
    value: 'Smart Building',
    label: 'Smart Building'
  },
  {
    value: 'Smart Environment',
    label: 'Smart Environment'
  },
  {
    value: 'Smart Health Products',
    label: 'Smart Health Products'
  },
  {
    value: 'Smart Juristic Platform',
    label: 'Smart Juristic Platform'
  },
  {
    value: 'Smart Lighting System',
    label: 'Smart Lighting System'
  },
  {
    value: 'Water Monitoring System',
    label: 'Water Monitoring System'
  }
]

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: '100%'
  },
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  contentBody: {
    // flexGrow: 1,
    display: 'flex',
    // alignItems: 'flex-start',
    // justifyContent: 'center',
    marginTop: 100,
    marginBottom: 100
  },
  form: {
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 125,
    width: 800,
    height: 1400
    // [theme.breakpoints.down('sm')]: {
    //   paddingLeft: theme.spacing(2),
    //   paddingRight: theme.spacing(2)
    // }
  },
  title: {
    marginTop: theme.spacing(3),
    textAlign: 'left'
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  textField: {
    marginTop: theme.spacing(2)
  },
  marginTextField: {
    margin: theme.spacing(2)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  submitButton: {
    margin: theme.spacing(8, 0),
    minWidth: 200,

  },
}))


const TypeOne = (props) => {
  const { history } = props;
  const classes = useStyles();

  const [place, setPlace] = useState('');
  const [purpose, setPurpose] = useState('');
  const [product, setProduct] = useState('');
  // const [formState, setFormState] = useState({
  //   isValid: false,
  //   values: {},
  //   touched: {},
  //   errors: {}
  // });

  const handleChangePlace = (e) => {
    setPlace(e.target.value);
  }
  const handleChangePurpose = (e) => {
    setPurpose(e.target.value);

  }
  const handleChangeProduct = (e) => {
    setProduct(e.target.value);
  }

  const onSubmitForm = (e) => {
    e.preventDefault()
    history.push('/thanks')
  }


  const checked = (value, options) => {
    if (value !== true) {
      return options.message || 'must be checked';
    }
  };



  return (
    <>
      <div className={classes.root}>
        <TopbarFrom />
        <div className={classes.content}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <div className={classes.contentBody}>
              <Paper>
                <form
                  className={classes.form}
                  onSubmit={onSubmitForm}>
                  <Typography
                    className={classes.title}
                    variant="h4"
                  >
                    Questionnaire1
                </Typography>
                  <Typography
                    gutterBottom
                  >
                    (Description)
                </Typography>
                  <Divider
                    className={classes.divider}
                  />
                  <div>
                    <Typography variant="h6">
                      Visiting from...
                    </Typography>
                    <TextField
                      fullWidth
                      className={classes.textField}
                      id="visiting"
                      select
                      label="Required"
                      value={place}
                      onChange={handleChangePlace}
                      variant="filled"
                      required
                    >
                      {places.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </div>

                  <div>
                    <Typography
                      className={classes.textField}
                      variant="h6">
                      Upload you picture
                    </Typography>
                    <p style={{ marginTop: '20px', marginLeft: '15px' }}> (file name) </p>
                    <div>
                      <WebcamCapture />
                      {/* <TextField
                        hiddenL
                        type="file"
                      /> */}
                      <Button
                        className={classes.marginTextField}
                        color="primary"
                        size="medium"
                        type="submit"
                        variant="contained"
                      >
                        Choose a File
                    </Button>
                    </div>
                  </div>

                  <div>
                    <Typography
                      className={classes.textField}
                      variant="h6"
                    >
                      Name
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6} lg={6}>
                        <TextField
                          className={classes.textField}
                          fullWidth
                          id="firstName"
                          label="Required"
                          type="text"
                          autoComplete="given-name"
                          variant="outlined"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          required
                          placeholder="First Name"
                        />
                      </Grid>
                      <Grid item xs={12} md={6} lg={6}>
                        <TextField
                          className={classes.textField}
                          fullWidth
                          id="lasttName"
                          label="Required"
                          type="text"
                          autoComplete="family-name"
                          variant="outlined"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          required
                          placeholder="Last Name"
                        />
                      </Grid>
                    </Grid>
                  </div>

                  <div>
                    <Typography
                      className={classes.textField}
                      variant="h6"
                    >
                      Email
                    </Typography>
                    <TextField
                      className={classes.textField}
                      fullWidth
                      id="email"
                      label="Required"
                      type="email"
                      autoComplete="email"
                      variant="outlined"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      required
                      placeholder="example@example.com"
                    />
                  </div>

                  <div>
                    <Typography
                      className={classes.textField}
                      variant="h6"
                    >
                      Company Name
                    </Typography>
                    <TextField
                      className={classes.textField}
                      fullWidth
                      id="companyName"
                      label="Required"
                      type="text"
                      autoComplete="organization"
                      variant="outlined"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      required
                      placeholder="example Co., Ltd."
                    />
                  </div>

                  <div>
                    <Typography
                      className={classes.textField}
                      variant="h6"
                    >
                      Phone Number
                    </Typography>
                    <TextField
                      className={classes.textField}
                      fullWidth
                      id="phoneNumber"
                      label="Required"
                      type="number"
                      autoComplete="tel"
                      variant="outlined"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      required
                      placeholder="0812345678"
                    />
                  </div>

                  <div>
                    <Typography
                      className={classes.textField}
                      variant="h6"
                    >
                      Purpose of Visiting
                    </Typography>
                    <TextField
                      fullWidth
                      // className={classes.textField}
                      id="purpose"
                      select
                      label="Select"
                      value={purpose}
                      onChange={handleChangePurpose}
                    >
                      {purposes.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </div>
                  <div>
                    <Typography
                      className={classes.textField}
                      variant="h6"
                    >
                      Contact Person Name
                    </Typography>
                    <TextField
                      className={classes.textField}
                      fullWidth
                      id="contactPersonName"
                      // label="Required"
                      type="text"
                      // autoComplete="contact"
                      variant="outlined"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    // required
                    // placeholder="example@example.com"
                    />
                  </div>
                  <div>
                    <Typography
                      className={classes.textField}
                      variant="h6"
                    >
                      Interested in our Product
                    </Typography>
                    <TextField
                      fullWidth
                      // className={classes.textField}
                      id="product"
                      select
                      label="Select"
                      value={product}
                      onChange={handleChangeProduct}
                    >
                      {products.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </div>

                  <Button
                    className={classes.submitButton}
                    color="primary"
                    // disabled={!formState.isValid}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Submit
                </Button>

                </form>
              </Paper>
            </div>
          </Grid>
        </div>
      </div>
    </>
  )
}

export default TypeOne;