import axios from 'axios';

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
    let changeableUrl=url;
    if(country && country!=='global')
    {
        changeableUrl=`${url}/countries/${country}`;
    }
    console.log(changeableUrl);
    try {
        const {data:{
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }} = await axios.get(changeableUrl);
        const modifiedData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate}
        return modifiedData;
    } catch (error) {
        console.log(error);
    }
} 

export const fetchDailyData= async ()=>{
    try {
        const {data}= await axios.get(`${url}/daily`);
        // console.log(data);
        const modifiedData= data.map((data)=>({
            confirmed: data.confirmed.total,
            deaths:data.deaths.total,
            date:data.reportDate
        }))
        return modifiedData;
    } catch (error) {
        console.log(error);    }
}

export const fetchCountries = async() =>
{
    try {
        const {data:{countries}}= await axios.get(`${url}/countries`);
        const mappedValue=countries.map(country=>country.name);
        return mappedValue;
    } catch (error) {
        console.log(error);
    }
}