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
  purpose: {
    textAlign: 'center',
    padding: theme.spacing(1)
  },
  purposeIcon: {
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
        data: [25, 30, 15, 30],
        backgroundColor: [
          theme.palette.primary.main,
          '#CAE7D9',
          '#86C4B2',
          '#D0E8D2'
        ],
        borderWidth: 5,
        borderColor: theme.palette.white,
        hoverBorderColor: theme.palette.white
      }
    ],
    labels: ['Workshop', 'Codecamp', 'Cafe', 'Other']
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

  const purposes = [
    {
      title: 'Workshop',
      value: '25',
      // icon: <LaptopMacIcon />,
      color: theme.palette.primary.main
    },
    {
      title: 'Codecamp',
      value: '30',
      // icon: <TabletMacIcon />,
      color: '#CAE7D9'
    },
    {
      title: 'Cafe',
      value: '15',
      // icon: <PhoneIphoneIcon />,
      color: '#86C4B2'
    },
    {
      title: 'Other',
      value: '30',
      // icon: <PhoneIphoneIcon />,
      color: '#D0E8D2'
    }
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
        title="Purpose of Visiting Ratio"
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
          {purposes.map(purpose => (
            <div
              className={classes.purpose}
              key={purpose.title}
            >
              {/* <span className={classes.purposeIcon}>{purpose.icon}</span> */}
              <Typography
                style={{ color: purpose.color }}
                variant="h2"
              >
                {purpose.value}%
              </Typography>
              <Typography variant="body1">{purpose.title}</Typography>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TotalProductAllForm;
