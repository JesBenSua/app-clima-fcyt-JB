
import getData from "../utils/getData";


const Character = () => {

    const ClimaApp= getData()
    console.log (ClimaApp);

    const view = `
        <div class="Characters">
            <article class="Characters-card">
                <img src="" alt="">
                <h2>Ciudad a monitoriar: <span> </span></h2>

            </article>

            <article class="Characters-cards>
               
                <h3>Temperatura Max: <span> </span></h3>
                <h3>Temperatura Min: <span> </span></h3>
                <h3>Presion atmosferica: <span> </span></h3>
                <h3>Humedad: <span> </span></h3>
                <h3>Velocidad: <span> </span></h3>
            </article>
        </div>
    `;

    return view;
}
export default Character;
        