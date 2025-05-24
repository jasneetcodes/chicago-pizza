
import App from "./App";
import Contact from "./components/Contact";
import Home from "./components/Home";
const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Home />},
            { path: "contact", element: <Contact />}
        ]
    },
    
    
];

export default routes;