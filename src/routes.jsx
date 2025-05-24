
import App from "./App";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Menu from "./components/Menu";
const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Home />},
            { path: "contact", element: <Contact />},
            { path: "menu", element: <Menu />}
        ]
    },
    
    
];

export default routes;