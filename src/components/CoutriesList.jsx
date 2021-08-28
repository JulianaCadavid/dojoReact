import React from 'react';
import CardCountries from './CardCountrie';

function CoutriesList({countries}){
    return(
        <div>
             {countries.map((countries) => {
                 return(
                    <CardCountries key={countrie.alpha2Code} name = {countrie.name} capital={countrie.capital} flag={countrie.flag}></CardCountries>
                 )
                 
             })}
        </div>
       
    )
}

export default CountriesList