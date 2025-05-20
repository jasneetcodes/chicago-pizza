import logo from '../assets/logo.png';

export default function NavBar(){

    return(<>
    
        <nav>
            <div className="logo-container">
                <img src={logo} alt="" />
            </div>
            <h1>Chicago Pizza</h1>
            <button>Hi</button>
        </nav>
    </>)
}