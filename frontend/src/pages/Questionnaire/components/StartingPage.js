import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import { DropzoneDialogBase } from 'material-ui-dropzone';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Grid,
  TextField,
  Typography,
  Divider,
  MenuItem,
} from '@material-ui/core';
import TopbarForm from '../../../layout/Form/Topbar'

const schema = {
  location: {
    presence: { allowEmpty: false, message: 'is required' },
    displayEmpty: true
  },
  card: {
    presence: { allowEmpty: false, message: 'is required' },
    // displayEmpty: true
  },
  purpose: {
    presence: { allowEmpty: false, message: 'is required' },
    displayEmpty: true
  },
  product: {
    presence: { allowEmpty: false, message: 'is required' },
    displayEmpty: true
  }

};

const locations = [
  {
    value: 'SynergyTechnology',
    label: 'Synergy Technology'
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
  root: {},
  cardholder: {
    paddingLeft: 40,
    paddingTop: 50,
  },
  form: {
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 125,
    width: 800,
    height: 1400
  },
  button: {
    marginTop: 20,
    marginBottom: 20
  },
}))

const Two = (props) => {
  const { history, className } = props;
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [fileObjects, setFileObjects] = useState([]);

  const [location, setLocation] = useState('');
  const [purpose, setPurpose] = useState('');
  const [product, setProduct] = useState('');
  // const [formState, setFormState] = useState({
  //   isValid: false,
  //   values: {},
  //   touched: {},
  //   errors: {}
  // });

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
    <TopbarForm />
    <Card
      className={classNames(classes.root, className)}
    >
      <Grid
        container
        spacing={3}
        direction="column"
        justify="center"
        alignItems="center"
      >
      <form
        className={classes.form}>
        <CardHeader
          className={classes.cardholder}
          onSubmit={onSubmitForm}
          title="Form2"
          subheader="Description"
        />
        <CardContent>

          <Divider />
          <Grid
            item
            xs={12} md={12} lg={12}
          >
            <TextField
              fullWidth
              label="Select Location"
              name="location"
              margin="dense"
              variant="outlined"
              required
              select
              value={location}
              onChange={handleChangeLocation}
            // helperText=""
            >
              {locations.map((option) => (
                <MenuItem
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid
            item
            xs={12} md={12} lg={12}>
            <Typography
              variant="body1"
            >
              Upload your Card
            </Typography>
            <div>
              <Button
                variant="contained"
                color="primary"
                size="small"
                type="submit"
                onClick={() => setOpen(true)}
              >
                Choose a File
                </Button>

              <DropzoneDialogBase
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
              />
            </div>
          </Grid>

          <Grid
            item
            xs={12} md={12} lg={12}
          >
            <Typography
              variant="body1"
            >
              Purpose of Visiting
                </Typography>
            <TextField
              fullWidth
              label="Select your Purpose"
              name="purpose"
              margin="dense"
              variant="outlined"
              select
              value={purpose}
              onChange={handleChangePurpose}
              required
            >
              {purposes.map((option) => (
                <MenuItem
                  key={option.value}
                  value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid
            item
            xs={12} md={12} lg={12}
          >
            <Typography
              variant="body1"
            >
              Interested in our Product
              </Typography>
            <TextField
              fullWidth
              label="Select your Interest"
              margin="dense"
              name="product"
              variant="outlined"
              select
              value={product}
              onChange={handleChangeProduct}
              required>
              {products.map((option) => (
                <MenuItem
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>


        </CardContent>

        <Divider />
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.button}>
          <CardActions>

            <Button
              color="primary"
              variant="contained"
              size="medium"
              type="medium"
            >
              Submit
          </Button>
          </CardActions>
        </Grid>
      </form>
      </Grid>
    </Card >
    </>
  )
}

export default Two;