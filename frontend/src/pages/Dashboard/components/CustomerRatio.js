import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import classNames from 'classnames';
import { makeStyles, useTheme } from '@material-ui/styles';
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Divider,
  Typography
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import RefreshIcon from '@material-ui/icons/Refresh';
import TabletMacIcon from '@material-ui/icons/TabletMac';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  chartContainer: {
    position: 'relative',
    height: '300px'
  },
  stats: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'space-around'
  },
  location: {
    textAlign: 'center',
    padding: theme.spacing(1)
  },
  locationIcon: {
    color: theme.palette.icon
  }
}));

const TotalProductAllForm = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const theme = useTheme();

  const data = {
    datasets: [
      {
        data: [35, 65],
        backgroundColor: [
          theme.palette.primary.main,
          '#CAE7D9',
          theme.palette.warning.main
        ],
        borderWidth: 5,
        borderColor: theme.palette.white,
        hoverBorderColor: theme.palette.white
      }
    ],
    labels: ['Synergy Technology', 'SYN HUB Co-innovative Space']
  };

  const options = {
    legend: {
      display: false,
      position: 'right'
    },
    responsive: true,
    maintainAspectRatio: false,
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    tooltips: {
      enabled: true,
      mode: 'index',
      intersect: false,
      borderWidth: 1,
      borderColor: theme.palette.divider,
      backgroundColor: theme.palette.white,
      titleFontColor: theme.palette.text.primary,
      bodyFontColor: theme.palette.text.secondary,
      footerFontColor: theme.palette.text.secondary
    }
  };

  const locations = [
    {
      title: 'Synergy Technology',
      value: '35',
      // icon: <LaptopMacIcon />,
      color: theme.palette.primary.main
    },
    {
      title: 'SYN HUB Co-innovative Space',
      value: '65',
      // icon: <TabletMacIcon />,
      color: '#CAE7D9'
    },
    // {
    //   title: 'Mobile',
    //   value: '23',
    //   icon: <PhoneIphoneIcon />,
    //   color: theme.palette.warning.main
    // }
  ];

  return (
    <Card
      {...rest}
      className={classNames(classes.root, className)}
    >
      <CardHeader
        action={
          <Button size="small"
            variant="text">
            Last week <ArrowDropDownIcon />
          </Button>
        }
        title="Customer Ratio"
      />
      <Divider />
      <CardContent>
        <div className={classes.chartContainer}>
          <Doughnut
            data={data}
            options={options}
          />
        </div>
        <div className={classes.stats}>
          {locations.map(location => (
            <div
              className={classes.location}
              key={location.title}
            >
              {/* <span className={classes.locationIcon}>{location.icon}</span> */}
              <Typography
                style={{ color: location.color }}
                variant="h2"
              >
                {location.value}%
              </Typography>
              <Typography variant="body1">{location.title}</Typography>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TotalProductAllForm;
