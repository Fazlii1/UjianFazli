import { Link } from 'react-router-dom';
import Logo from '../../public/Education.png';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between p-2 bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl">
            <div className="flex items-center">
                <img src={Logo} alt="Logo" className="h-16 md:h-20" /> 
            </div>
            <div className="flex space-x-4 ml-auto">
                <Link to="/" className="text-gray-800 text-xl font-semibold hover:text-blue-600 transition-colors duration-300">Home</Link>
                <Link to="/promo" className="text-gray-800 text-xl font-semibold hover:text-blue-600 transition-colors duration-300">Promo</Link>
                <Link to="/event" className="text-gray-800 text-xl font-semibold hover:text-blue-600 transition-colors duration-300">Event</Link>
                <Link to="/login" className="text-gray-800 text-xl font-semibold hover:text-blue-600 transition-colors duration-300">
                    Daftar / Login
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
