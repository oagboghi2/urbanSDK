import React, { Component } from 'react';
import TempCard from '../../components/tempCard/tempCard.js'
import Reactotron from 'reactotron-react-js';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100vw',
        margin: '45px 0px 25px 0px',
        padding: '12 20',
        
        
      },
    cardContainer: {
      height: '35vh',
      justifyContent: '',
      margin: '50px 20px 50px 0px',
      transform: 'scale(0.8)',
      borderRadius: '20px',
      opacity: '0.8',
      
    },
  });

  export default function CardRow(props) {
        const classes = useStyles();
        Reactotron.log("Card Rows props", props)
        return (
            <div className={classes.cardContainer}>
                <div className={classes.container}>
                <TempCard dataProps={props.avgTemperature} subTitle='Avg Temp'/>
                <TempCard dataProps={props.cardData.cwa} subTitle="CWA of area"/>
                <TempCard dataProps={props.location.city} subTitle="City"/>
                <TempCard dataProps={props.location.state} subTitle="State"/>
                </div>
            </div>
        )
    }