import React, { useState, useEffect } from 'react'
import { DropzoneDialogBase } from 'material-ui-dropzone';
import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  Button,
  TextField,
  Typography,
  Paper,
  Divider,
  MenuItem,
} from '@material-ui/core';
import TopbarFrom from '../../../layout/Form/Topbar'
import WebcamCapture from '../components/WebcamCapture'

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
  location: {
    presence: { allowEmpty: false, message: 'is required' },
    displayEmpty: true
  }
};

const locations = [
  {
    value: 'SynergyTechnology',
    label: 'Synegy Technology'
  },
  {
    value: 'SynHub',
    label: 'SYN HUB Co-Innovative Space'
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
    height: '100%',
    width: '100%'
  },
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  contentBody: {
    display: 'flex',
    marginTop: 100,
    marginBottom: 50,
    [theme.breakpoints.down('sm')]: {
      marginTop: 40,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: 0,
    }
  },
  form: {
    paddingLeft: 100,
    paddingRight: 100,
    // paddingBottom: 125,
    width: 800,
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      // marginBottom: 50
      height: '100%'
    }
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
  submitButton: {
    margin: theme.spacing(8, 0),
    // minWidth: 200,

  },
}))


const FormOne = props => {
  const { history } = props;
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [fileObjects, setFileObjects] = useState([]);

  const [location, setLocation] = useState('');
  const [purpose, setPurpose] = useState('');
  const [product, setProduct] = useState('');
  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  });

  const handleChangeLocation = (e) => {
    setLocation(e.target.value);
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
            <Grid
              item
              md={12}
              lg={12}>
              <div className={classes.contentBody}>
                <Paper>
                  <form
                    className={classes.form}
                    onSubmit={onSubmitForm}>
                    <Typography
                      className={classes.title}
                      variant="h4"
                    >
                      Form1
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
                        id="location"
                        select
                        label="Select"
                        value={location}
                        onChange={handleChangeLocation}
                        variant="outlined"
                        required
                      >
                        {locations.map((option) => (
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
                        {/* <DropzoneDialogBase
                          acceptedFiles={['image/*']}
                          fileObjects={fileObjects}
                          cancelButtonText={"cancel"}
                          submitButtonText={"submit"}
                          Width="400"
                          maxFileSize={5000000}
                          open={open}
                          onAdd={newFileObjs => {
                            console.log('onAdd', newFileObjs);
                            setFileObjects([].concat(fileObjects, newFileObjs));
                          }}
                          onDelete={deleteFileObj => {
                            console.log('onDelete', deleteFileObj);
                          }}
                          onClose={() => setOpen(false)}
                          onSave={() => {
                            console.log('onSave', fileObjects);
                            setOpen(false);
                          }}
                          showPreviews={true}
                          showFileNamesInPreview={true}
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
                        className={classes.textField}
                        id="purpose"
                        select
                        label="Select"
                        variant="outlined"
                        value={purpose}
                        onChange={handleChangePurpose}
                        required
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
                        className={classes.textField}
                        id="product"
                        select
                        label="Select"
                        variant="outlined"
                        required
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
          </Grid>
        </div>
      </div>
    </>
  )
}

export default FormOne;