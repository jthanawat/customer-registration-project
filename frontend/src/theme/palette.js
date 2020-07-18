import { colors } from '@material-ui/core'

const white = '#fff';
const black = '#000';

export default {
    common: {
      black: "#000",
      white: "#fff"
    },
    primary: {
      contrastText: white,
      dark: colors.teal[900],
      main: colors.teal[500],
      light: colors.teal[100]
    },
    secondary: {
      contrastText: white,
      dark: colors.cyan[900],
      main: colors.cyan[500],
      light: colors.cyan[100]
    },
    success: {
      contrastText: white,
      dark: colors.green[900],
      main: colors.green[500],
      light: colors.green[100]
    },
    error: {
      contrastText: white,
      dark: colors.red[900],
      main: colors.red[500],
      light: colors.red[100]
    },
    warning: {
      contrastText: white,
      dark: colors.orange[900],
      main: colors.orange[500],
      light: colors.orange[100]
    },
    info: {
      contrastText: white,
      dark: colors.teal[900],
      main: colors.teal[500],
      light: colors.teal[100]
    },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[100],
      link: colors.blueGrey[100],
      disabled: colors.blueGrey[100]
    },
    background: {
      default: 'F4F6F8',
      paper: white
    },
    divider: colors.grey[200],
    icon: colors.blueGrey[600]
  }