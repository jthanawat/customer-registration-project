import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import {
  Card,
  CardContent,
  CardActions,
  Grid,
  IconButton,
  Typography,
  Divider,
  Menu,
  MenuItem
} from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const options = [
  "Overview",
  "Results",
  "Visitors",
  "Share",
  "Rename",
]

const ITEM_HEIGHT = 48;

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 450,
    height : '100%'
  },
  header: {
    backgroundColor: theme.palette.primary.main,
  },
}));

const FormCard = props => {
  const { className, title } = props;
  const classes = useStyles();

  const [anchor, setAnchor] = useState(null)
  const open = Boolean(anchor)

  const handleClick = e => {
    setAnchor(e.currentTarget);
  }

  const handleClose = () => {
    setAnchor(null);
  }

  return (
    <Card className={classNames(classes.root, className)}>
      <CardContent
        className={classNames(classes.header)}
      >
        <Typography
          variant="h4"
          style={{ color: 'white', justifyContent: "center" }}
          align="center"
        >
          {title}
            </Typography>
      </CardContent>
      <Divider />
      <CardContent>
        <Typography variant="h2" color="primary" component="p" align='center'>
          0
        </Typography>
        <Typography variant="body2" color="textPrimary" component="p" align='center'>
          <div>
            Responses since
          </div>
          <div>
            August 13, 2020
          </div>
        </Typography>
      </CardContent>

      <CardContent>
        <Typography variant="h4" color="primary" component="p" align='center'>
          0
        </Typography>
        <Typography variant="body2" color="textPrimary" component="p" align='center'>
          <div>
            Responses Today
          </div>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Grid
          container
          justify="space-between"
        >
          <Grid item>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              aria-label="more"
              aria-controls="long-menu"
              aria-hashpopup="true"
              onClick={handleClick}
            >
              <MoreHorizIcon />
            </IconButton>
            <Menu
            id="long-menu"
            anchor={anchor}
            keepMounted
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: '16ch',
                marginLeft: '600px',
                marginBottom: '1000px'
              },
            }}
            >
              {options.map((option) => (
                <MenuItem key={option} onClick={handleClose}> {option} </MenuItem>
              ))}

            </Menu>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}

export default FormCard;