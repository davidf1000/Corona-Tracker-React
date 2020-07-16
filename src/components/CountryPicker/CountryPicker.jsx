import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from './CountryPicker.module.css'
import {fetchCountries} from '../../api/index';

const CountryPicker = ({countryChanged}) => {
    const [country,setCountry] = useState([]);
    useEffect(()=>{
        const getCountry = async()=>
        {
            const res = await fetchCountries();
            console.log(res);
            setCountry(res);
        }
        getCountry();
    },[])

  return (
    <div >
      <FormControl className={styles.formControl}>
          <NativeSelect defaultValue="" onChange={e=>countryChanged(e.target.value)}>
              <option value="global">Global</option>
              {country.map((country,i)=>(
                  <option key={i}>{country}</option>
              ))}
          </NativeSelect>
      </FormControl>
    </div>
  );
};

export default CountryPicker;
