interface FooterProps {
  'data-aos'?: string;
}

const Footer: React.FC<FooterProps> = ({ 'data-aos': dataAos }) => {
  return (
    <footer id="kontak" className="bg-gradient-to-br from-blue-900 to-blue-800 text-white pt-16 pb-8" data-aos={dataAos}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Minyak Pamboang Pusaka Mandar</h3>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Warisan asli Indonesia yang menjaga kesehatan keluarga dengan kekuatan alam.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/p/Minyak-Pamboang-Pusaka-Mandar-100090603210553/" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white transition-colors duration-200">
                <span className="sr-only">Facebook</span>
                <div className="h-10 w-10 bg-red-900 rounded-xl flex items-center justify-center hover:bg-red-800 transition-colors duration-200 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                    <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.77l-.44 2.9h-2.33V22c4.78-.75 8.44-4.91 8.44-9.93z"/>
                  </svg>
                </div>
              </a>

              <a href="https://www.instagram.com/minyak.pamboang2020bpom/" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white transition-colors duration-200">
                <span className="sr-only">Instagram</span>
                <div className="h-10 w-10 bg-red-900 rounded-xl flex items-center justify-center hover:bg-red-800 transition-colors duration-200 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                    <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5c3.18 0 5.75-2.57 5.75-5.75v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5C18.54 4 20 5.46 20 7.75v8.5C20 18.54 18.54 20 16.25 20h-8.5C5.46 20 4 18.54 4 16.25v-8.5C4 5.46 5.46 4 7.75 4zm8.75 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"/>
                  </svg>
                </div>
              </a>

              <a href="https://www.tiktok.com/@minyak.pamboang2020bpom?_r=1&_t=ZS-952GHA9GapQ" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white transition-colors duration-200">
                <span className="sr-only">TikTok</span>
                <div className="h-10 w-10 bg-red-900 rounded-xl flex items-center justify-center hover:bg-red-800 transition-colors duration-200 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                    <path d="M16 2c.3 2.1 1.7 3.7 3.7 4v2.6c-1.2 0-2.4-.4-3.4-1.1v6.3c0 3.3-2.7 6-6 6S4.3 17.1 4.3 13.8 7 7.8 10.3 7.8c.4 0 .8 0 1.2.1v2.7c-.4-.1-.8-.2-1.2-.2-1.8 0-3.3 1.5-3.3 3.3S8.5 17 10.3 17s3.3-1.5 3.3-3.3V2h2.4z"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>
          
          <div className="md:mx-auto">
            <h4 className="text-lg font-semibold mb-4">Menu</h4>
            <ul className="space-y-3">
              <li><a href="#hero" className="text-blue-100 hover:text-white transition-colors duration-200">Beranda</a></li>
              <li><a href="#produk" className="text-blue-100 hover:text-white transition-colors duration-200">Produk</a></li>
              <li><a href="#cerita" className="text-blue-100 hover:text-white transition-colors duration-200">Tentang Kami</a></li>
              <li><a href="#testimoni" className="text-blue-100 hover:text-white transition-colors duration-200">Testimoni</a></li>
            </ul>
          </div>
          
          <div className="md:mx-auto">
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <ul className="space-y-3 text-blue-100">
              <li className="flex items-start">
                <span className="mr-3">⬇️</span>
                <span>Berikut no. telp dan alamat</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">📞</span>
                <span>0813-4126-3588</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">📍</span>
                <span>Jl. Rappocini Raya Lr. 9E No. 18, Kec. Rappocini, Kota Makassar, Sulawesi Selatan</span>
              </li>
            </ul>
          </div>
          
          <div className="md:mx-auto">
            <h4 className="text-lg font-semibold mb-4">Mitra Kami</h4>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Didukung oleh mitra terpercaya kami.
            </p>
            <div className="flex flex-col items-start space-y-5">
              <img 
                src="/dekat-lokal.png" 
                alt="Dekat Lokal" 
                className="h-12 w-auto object-contain brightness-110"
              />
              <img 
                src="/rumah-bumn.png" 
                alt="Rumah BUMN" 
                className="h-12 w-auto object-contain brightness-110"
              />
              <img 
                src="/bank-bri.png" 
                alt="Bank BRI" 
                className="h-12 w-auto object-contain brightness-125 contrast-125"
              />
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-10 pt-6 text-center text-blue-200">
          <p>&copy; {new Date().getFullYear()} Minyak Pamboang Pusaka Mandar. All rights reserved | Powered by DekatLokal</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;