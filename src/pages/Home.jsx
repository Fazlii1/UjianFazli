import Navbar from '../../src/Component/Navbar';
import Footer from '../Component/Footer';
import Bg from '../../public/bg-program.png';

const Home = () => {
    return (
        <div className="relative bg-blue-200">
            <Navbar />

     
            <div className="flex flex-col md:flex-row items-center justify-center h-screen p-8">
              
                <div className="flex flex-col justify-center items-start w-full md:w-1/2 p-6 md:p-12 bg-white rounded-lg shadow-lg">
                    <h1 className="text-5xl font-extrabold text-blue-800 mb-4">Selamat Datang di Education</h1>
                    <p className="text-lg text-gray-700 mb-6">
                        Temukan program belajar terbaik untuk masa depanmu. Mulailah perjalananmu menuju sukses hari ini!
                    </p>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 transition duration-300">
                        Mulai Belajar
                    </button>
                </div>

             
                <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
                    <div className="relative w-3/4 max-w-md overflow-hidden rounded-lg shadow-xl transition-transform duration-500 hover:scale-105">
                        <img 
                            src={Bg} 
                            alt="Education Background"
                            className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110 rounded-lg" 
                        />
                    </div>
                </div>
            </div>

        
            <Footer />
        </div>
    );
};

export default Home;
