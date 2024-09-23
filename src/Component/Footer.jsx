const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between mb-6">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-lg font-bold mb-2">Tentang Kami</h3>
                        <p className="text-sm">
                            Education adalah platform untuk membantu kamu menemukan program belajar terbaik untuk masa depanmu.
                        </p>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-lg font-bold mb-2">Layanan Kami</h3>
                        <ul className="text-sm space-y-1">
                            <li><a href="#" className="text-violet-500 hover:underline">Program Belajar</a></li>
                            <li><a href="#" className="text-violet-500 hover:underline">Kursus Online</a></li>
                            <li><a href="#" className="text-violet-500 hover:underline">Sertifikasi</a></li>
                        </ul>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-lg font-bold mb-2">Bantuan</h3>
                        <ul className="text-sm space-y-1">
                            <li><a href="#" className="text-violet-500 hover:underline">Kebijakan Privasi</a></li>
                            <li><a href="#" className="text-violet-500 hover:underline">Syarat dan Ketentuan</a></li>
                            <li><a href="#" className="text-violet-500 hover:underline">Kontak Kami</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-700 pt-4">
                    <p className="text-center text-sm">&copy; 2024 Education. Semua hak cipta dilindungi.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
