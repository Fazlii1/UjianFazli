import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import Bg from '../../public/bg-program.png';
import event1 from '../../public/event1.png';
import event2 from '../../public/event2.png';
import event3 from '../../public/event3.png';

const Event = () => {
    const events = [
        { id: 1, image: event1, title: 'Study and Work Abroad Festival 2024', description: 'Bergabunglah dalam Study and Work Abroad Festival (SWF) dari Schoters by Education, festival studi dan karir di luar negeri terbesar di Indonesia' },
        { id: 2, image: event2, title: 'Festival Kampus Impian', description: ' Festival Kampus Impian adalah serangkaian persiapan lengkap UTBK-SNBT bagi siswa jenjang SMA dan/atau setara agar dapat diterima di universitas tujuan melalui jalur tes. GRATIS! .' },
        { id: 3, image: event3, title: 'Liga Education', description: 'Kompetisi pelajar (SD-SMA) terbesar se-Indonesia. Ikuti beragam lomba seru sesuai minat dan bakatmu! Menangkan total hadiah Miliaran Rupiah serta trip ke kampus ternama di USA. #WaktunyaKamuJuara' },
    ];

    return (
        <>
            <Navbar />

            <div className="bg-gradient-to-r from-blue-500 to-teal-500 py-16">
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 lg:px-0">
            
                    <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
                        <h1 className="text-5xl font-extrabold text-white mb-4">Temukan Event Seru dari Education Sekarang</h1>
                        <p className="text-lg text-white">
                            Berbagai event menarik yang dapat meningkatkan wawasan dan pengalaman belajarmu. Jangan lewatkan!
                        </p>
                    </div>

         
                    <div className="lg:w-1/2">
                        <img src={Bg} alt="Event Program" className="w-full h-auto rounded-lg" />
                    </div>
                </div>
            </div>

       
            <div className="py-16 bg-gray-100">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-12">Event Mendatang</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 lg:px-0">
                        {events.map((event) => (
                            <div key={event.id} className="bg-white rounded-lg shadow-lg p-6 transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
                                <img src={event.image} alt={event.title} className="w-full h-52 object-cover rounded-lg mb-4" />
                                <h3 className="text-2xl font-semibold mb-2 text-gray-800">{event.title}</h3>
                                <p className="text-gray-600 mb-6">{event.description}</p>
                                <button className="bg-blue-600 text-white font-medium py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300">
                                    Ikuti Event
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Event;
