
const API = 'https://api.openweathermap.org/data/2.5/weather?lat=32.47&lon=58.29'

const KEY = '76b874bf416d892d53b77619dae06fe2'

const getData = async () => {
    const apiURL = `${API}&appid=${KEY}&units=metric`;
    
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {   
        console.log('Fetch Error', error);
    }
}

export default getData;