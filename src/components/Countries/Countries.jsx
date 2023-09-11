import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './countries.css'
import '../Country/country.css'

const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    useEffect( () => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])

    const handleVisitedCountries = country => {
        console.log('added visited countries');

        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags = flag => {
        console.log('visited flags');

        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }

    return (
        // Visited Countries
        <div>
            <h5>Countries: {countries.length}</h5>
            <h5>Visited Countries: {visitedCountries.length}</h5>
            <div>
                {
                    visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                }
            </div>

            {/* Visited country flags */}
            <h5>Visited Flags: {visitedFlags.length}</h5>
            <div>
                {
                    visitedFlags.map(flag => <li key={flag}><img className="img-width" src={flag} alt="" /></li>)
                }
            </div>
            <div className="country-container">
                {
                    countries.map(country => <Country key={country.cca3} handleVisitedCountries={handleVisitedCountries} handleVisitedFlags={handleVisitedFlags} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;