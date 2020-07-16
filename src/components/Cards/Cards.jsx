import React from 'react'
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';
import Spinner from '../Spinner/Spinner';

const Cards = ({data:{confirmed,recovered,deaths,lastUpdate}}) => {

    if(!confirmed)
    {
        return (<Spinner />);
    }
    console.log(confirmed);
    console.log(recovered);
    console.log(deaths);
    console.log(lastUpdate);
    return (
        <div className={styles.container}>
        <Grid container spacing={3} justify="center">
            <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Infected</Typography>
                    <Typography variant="h5" >
                    <CountUp start={0} end={Number(confirmed.value)} duration={1.5} separator="," />
                    </Typography>
                    <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2" >Number of active cases of COVID-19</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>

                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                    <Typography variant="h5" >
                    <CountUp start={0} end={Number(recovered.value)} duration={1.5} separator="," />
                    </Typography>
                    <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2" >Number of Recoveries of COVID-19</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>

                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                    <Typography variant="h5" >
                    <CountUp start={0} end={Number(deaths.value)} duration={1.5} separator="," />
                    </Typography>
                    <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2" >Number of Death of COVID-19</Typography>
                </CardContent>
            </Grid>
        </Grid>
        </div>
    )
}

export default Cards;