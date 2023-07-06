const Pokedex = ({data, error}) => {

    function capFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    if(!error) {
        return (
            <div className="main-container">
            <main>
                <section className="img-section">
                    <img src={data.sprites.other['official-artwork'].front_default} alt={`Picture of ${data.name}`} />
                </section>
                <section className="pokedata">
                    <div>Name: {capFirst(data.name)}</div>
                    <div>Type: {capFirst(data.types[0].type.name)}</div>
                    <div>Height: {data.height} ft</div>
                </section>
            </main>
            </div>
        )
    }
    else {
        return(
            <div className="main-container">
                <main>
                    <section className="error">
                        Pokemon Not Found. Try Again! 
                    </section>
                </main>
            </div>
        )
    }
}

export default Pokedex