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
  product: {
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
        data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
        backgroundColor: [
          theme.palette.primary.main,
          '#CAE7D9',
          '#86C4B2',
          '#D0E8D2',
          '#4B8675',
          '#6F989B',
          '#ACECE4',
          '#A6C4C4',
          '#92B7B7',
          '#6AB8A1',
        ],
        borderWidth: 5,
        borderColor: theme.palette.white,
        hoverBorderColor: theme.palette.white
      }
    ],
    labels: 
    [
      'EduTech Workshops',
      'Energy Management System',
      'PCB/PCBA',
      'Robotics',
      'Smart Building',
      'Smart Environment',
      'Smart Health Products',
      'Smart Juristic Platform',
      'Smart Lighting System',
      'Water Monitoring System'
    ]
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

  const products = [
    {
      title: 'EduTech Workshops',
      value: '10',
      // icon: <LaptopMacIcon />,
      color: theme.palette.primary.main
    },
    {
      title: 'Energy Management System',
      value: '10',
      // icon: <TabletMacIcon />,
      color: '#CAE7D9'
    },
    {
      title: 'PCB/PCBA',
      value: '10',
      // icon: <PhoneIphoneIcon />,
      color: '#86C4B2'
    },
    {
      title: 'Robotics',
      value: '10',
      // icon: <PhoneIphoneIcon />,
      color: '#D0E8D2'
    },
    {
      title: 'Smart Building',
      value: '10',
      // icon: <PhoneIphoneIcon />,
      color: '#4B8675'
    },
    {
      title: 'Smart Environment',
      value: '10',
      // icon: <PhoneIphoneIcon />,
      color: '#6F989B'
    },
    {
      title: 'Smart Health Products',
      value: '10',
      // icon: <PhoneIphoneIcon />,
      color: '#ACECE4'
    },
    {
      title: 'Smart Juristic Platform',
      value: '10',
      // icon: <PhoneIphoneIcon />,
      color: '#A6C4C4'
    },
    {
      title: 'Smart Lighting System',
      value: '10',
      // icon: <PhoneIphoneIcon />,
      color: '#92B7B7'
    },
    {
      title: 'Water Monitoring System',
      value: '10',
      // icon: <PhoneIphoneIcon />,
      color: '#6AB8A1'
    },
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
        title="Interest in our Product Ratio"
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
          {products.map(product => (
            <div
              className={classes.product}
              key={product.title}
            >
              {/* <span className={classes.purposeIcon}>{product.icon}</span> */}
              <Typography
                style={{ color: product.color }}
                variant="h2"
              >
                {product.value}%
              </Typography>
              <Typography variant="body1">{product.title}</Typography>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TotalProductAllForm;
