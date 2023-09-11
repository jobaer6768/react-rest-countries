import { useState } from 'react';
import './country.css'

const Country = ({country, handleVisitedCountries, handleVisitedFlags}) => {

    const {name, flags, capital} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }

    return (
        <div className={`country ${visited ? 'visited box' : 'box'}`}>
            <h3>Name: {name.common}</h3>
            <h5>Capital: {capital}</h5>
            <img className='img-width' src={flags.png} alt={flags.alt} />
            <br /><br />
            <button onClick={() => handleVisitedCountries(country)}>Mark Visited Countries</button>
            <br />
            <br />
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Mark Visited Flags</button>
            <br /><br />
            <button onClick={handleVisited} className='btn-visited'>Visited</button>
            {
                <p>{visited ? 'Already Visited' : 'Have to go there'}</p>
            }
        </div>
    );
};

export default Country;