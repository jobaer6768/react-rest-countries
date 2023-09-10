import './box.css'

const Country = ({country}) => {
    console.log(country)

    const {name, flags} = country;

    return (
        <div className="box">
            <h6>Name: {name.common}</h6>
            <img src={flags.png} alt={flags.alt} />
        </div>
    );
};

export default Country;