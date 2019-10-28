import React from 'react';
import Reactotron from 'reactotron-react-js';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 325,
    minHeight: 225,
    backgroundColor: '#273141',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 48,
    color: 'white'
  },
  pos: {
    marginBottom: 12,
  },
});

export default function TempCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  Reactotron.log('tempCards', props.dataProps)
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2" className={classes.title}>
         {props.dataProps}
        </Typography>
      </CardContent>
      <Typography >
         {props.subTitle}
        </Typography>
      <CardActions>
        <Button size="small"></Button>
      </CardActions>
    </Card>
  );
}