import Navbar from '../../src/Component/Navbar';
import Footer from '../Component/Footer';
import Promo1 from '../../public/promo1.png';
import Promo2 from '../../public/promo2.png';
import Promo3 from '../../public/promo3.png';

const Promo = () => {
    const promos = [
        { id: 1, image: Promo1, title: 'Promo Belajar 1', description: 'Dapatkan diskon hingga 50% untuk kursus online pilihan!', discount: '50% Off', timeLeft: 'Berakhir dalam 2 hari!' },
        { id: 2, image: Promo2, title: 'Promo Belajar 2', description: 'Nikmati akses premium dengan harga spesial untuk pelajaran favoritmu!', discount: 'Spesial Harga', timeLeft: 'Hanya 3 hari lagi!' },
        { id: 3, image: Promo3, title: 'Promo Belajar 3', description: 'Berlangganan bulanan dengan potongan harga eksklusif!', discount: 'Diskon Eksklusif', timeLeft: 'Penawaran terbatas!' },
        { id: 4, image: Promo1, title: 'Promo Belajar 4', description: 'Belajar tanpa batas dengan diskon menarik!', discount: 'Limited Time', timeLeft: 'Promo berakhir minggu ini!' },
        { id: 5, image: Promo2, title: 'Promo Belajar 5', description: 'Paket belajar intensif dengan harga terjangkau!', discount: 'Harga Murah', timeLeft: 'Hingga akhir bulan!' },
        { id: 6, image: Promo3, title: 'Promo Belajar 6', description: 'Diskon spesial untuk pelajar dan mahasiswa!', discount: 'Diskon Pelajar', timeLeft: 'Promo eksklusif bulan ini!' },
    ];

    return (
        <>
            <Navbar />
            
            <div className="bg-gradient-to-b from-blue-500 to-teal-500 py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-5xl font-extrabold text-white mb-8 tracking-wide">Promo Pembelajaran</h2>
                    <p className="text-lg text-white mb-12 max-w-2xl mx-auto">
                        Manfaatkan berbagai promo menarik yang dapat meningkatkan proses belajarmu dengan harga terbaik dan penawaran spesial!
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 lg:px-0">
                        {promos.map((promo) => (
                            <div key={promo.id} className="relative bg-white rounded-lg shadow-lg transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl p-6">
                       
                                <div className="absolute top-4 right-4 bg-red-500 text-white text-sm px-3 py-1 rounded-full">
                                    {promo.discount}
                                </div>
                                
                                <img src={promo.image} alt={promo.title} className="w-full h-52 object-cover rounded-lg mb-4" />
                                <h3 className="text-2xl font-semibold mb-2 text-gray-800">{promo.title}</h3>
                                <p className="text-gray-600 mb-4">{promo.description}</p>
                       
                                <div className="mb-6 text-red-600 font-semibold">
                                    {promo.timeLeft}
                                </div>
                                
                                <button className="bg-blue-600 text-white font-medium py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300">
                                    Lihat Promo
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

export default Promo;
