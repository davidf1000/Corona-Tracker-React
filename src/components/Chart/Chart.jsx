import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";
import Spinner from '../Spinner/Spinner';

const Chart = ({data:{confirmed,recovered,deaths,lastUpdate,country}}) => {
  const [dailyData, setDailyData] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const dailyData = await fetchDailyData();
      setDailyData(dailyData);
        // console.log(dailyData);
    };
    fetch();

  }, []);
  const lineChart= (
      typeof(dailyData)!=='undefined'?(<Line 
        data={{
            labels:dailyData.map(({date})=>date),
            datasets:[{
                data: dailyData.map(({confirmed})=>confirmed),
                label: 'Infected',
                borderColor:'red',
                fill:true
            },{
                data: dailyData.map(({deaths})=>deaths),
                label: 'Deaths',
                borderColor:'blue',
                fill:true
            }]
        }} />) : <Spinner />
  );

  const barChart = (
    typeof(confirmed)!=='undefined'?(
      <Bar 
        data={{
          labels:['Infected','Recovered','Deaths'],
          datasets:[
            {label:'People',
            backgroundColor:['blue','green','red'],
            data:[confirmed.value,recovered.value,deaths.value]}
          ]
        }}
        options={{
          legend:{display:false},
          title:{display:true,text:`Current State`}
        }}
      />
    ) : <Spinner />
  )    

 if(!confirmed)
 {
     return (<Spinner />);
 }
  return (
    <div className={styles.container}>
    {country!=='global'? barChart:lineChart}
    
    </div>
  );
}; 

export default Chart;
