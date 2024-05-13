import Header from "../templates/Header";
import Character from "../page/ClimaApp";
import Error404 from "../page/Error404";


const routes = {
    '/': ClimaApp,
    '/about': 'About',
};

const router = async () => {

    const Header = null || document.getElementById('header');
    const content = null || document.getElementById('content');


    Header.innerHTML = await Header ();
    let render = routes [route] ? routes[route] : Error404;
    content.innerHTML = await render ();

}

export default router;