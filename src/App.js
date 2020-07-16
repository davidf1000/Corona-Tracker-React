import React, {useEffect,useState} from 'react'
import {Cards,Chart,CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api/index'; 
import Typography from "@material-ui/core/Typography";

 const App = () => {
    const [data,setData]= useState({
        confirmed:'',
        recovered:'',
        deaths:'',
        lastUpdate:'',
        country:'global'
    });
     useEffect( ()=>{
          const fetch=async()=>{
             
                const data= await fetchData();
                setData({...data,country:'global'});
         }
         fetch();
     },[]);

    const countryChanged = async(country)=>{
        const fetchedData= await fetchData(country);
        console.log(country);
        console.log(fetchedData);
        setData({...fetchedData,country:country});
        //fetch data then set state
    }
    return (
        <div className={styles.container}>
            <Typography variant="h3" >Corona Tracker</Typography>
            <Typography variant="h5" >by David Fauzi</Typography>
            <Cards data={data}/>
            <CountryPicker countryChanged={countryChanged}  />
            <Chart data={data} />
        </div>
    )
}

export default App;