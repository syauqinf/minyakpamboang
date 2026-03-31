interface FiturProps {
  'data-aos'?: string;
}

const Fitur: React.FC<FiturProps> = ({ 'data-aos': dataAos }) => {
  return (
    <section id="fitur" className="py-16 bg-white" data-aos={dataAos}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-green-800 leading-tight tracking-wide mb-4">
            Keunggulan Produk Kami
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 rounded-full mx-auto"></div>
        </div>
        
        {/* Desktop Layout - Left Right */}
        <div className="hidden lg:flex lg:items-start lg:gap-12 max-w-6xl mx-auto">
          {/* Left: Feature 1 */}
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 md:p-12 border-2 border-green-200 shadow-xl relative z-10">
                <div className="text-center space-y-6">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-green-800 leading-tight tracking-wide">
                    RAHASIA WARISAN LELUHUR
                  </h3>
                  
                  <div className="w-16 h-0.5 bg-gradient-to-r from-green-600 to-green-400 mx-auto rounded-full"></div>
                  
                  <p className="text-lg md:text-xl lg:text-2xl font-bold text-green-700 leading-snug max-w-4xl mx-auto">
                    Memiliki Tubuh yang Sehat, Kuat, dan Bebas Pegal Memang menjadi Dambaan Semua Orang.
                  </p>
                  
                  <p className="text-lg md:text-xl lg:text-2xl font-semibold text-green-600 leading-snug max-w-4xl mx-auto">
                    Khususnya Bagi Anda yang sudah memasuki Usia Produktif dengan Segudang Aktivitas
                  </p>
                </div>
              </div>
              {/* Enhanced glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-300/60 to-green-400/60 rounded-2xl blur-xl -z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/40 to-green-500/40 rounded-2xl blur-2xl -z-10 scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/25 to-green-600/25 rounded-2xl blur-3xl -z-10 scale-110"></div>
            </div>
          </div>

          {/* Right: Feature 2 */}
          <div className="lg:w-1/2 lg:pl-4">
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 md:p-12 border-2 border-green-300 shadow-xl relative z-10">
                <div className="text-center space-y-6">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-green-800 leading-tight tracking-wide">
                    KEAJAIBAN WARISAN LELUHUR
                  </h3>
                  
                  <div className="w-16 h-0.5 bg-gradient-to-r from-green-600 to-green-400 mx-auto rounded-full"></div>
                  
                  <p className="text-lg md:text-xl lg:text-2xl font-bold text-green-700 leading-snug max-w-4xl mx-auto">
                    Memiliki Tubuh Segar, Tanpa Nyeri dan Bebas Luka Memang menjadi Harapan Setiap Keluarga.
                  </p>
                  
                  <p className="text-lg md:text-xl lg:text-2xl font-semibold text-green-600 leading-snug max-w-4xl mx-auto">
                    Khususnya Bagi Anda yang Mengutamakan Kesembuhan Alami Tanpa Bahan Kimia.
                  </p>
                </div>
              </div>
              {/* Enhanced glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/60 to-green-500/60 rounded-2xl blur-xl -z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/40 to-green-600/40 rounded-2xl blur-2xl -z-10 scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/25 to-green-700/25 rounded-2xl blur-3xl -z-10 scale-110"></div>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Stacked */}
        <div className="lg:hidden max-w-5xl mx-auto space-y-12">
          {/* Feature 1 */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 md:p-12 border-2 border-green-200 shadow-xl relative z-10">
              <div className="text-center space-y-6">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-green-800 leading-tight tracking-wide">
                  RAHASIA WARISAN LELUHUR
                </h3>
                
                <div className="w-16 h-0.5 bg-gradient-to-r from-green-600 to-green-400 mx-auto rounded-full"></div>
                
                <p className="text-lg md:text-xl lg:text-2xl font-bold text-green-700 leading-snug max-w-4xl mx-auto">
                  Memiliki Tubuh yang Sehat, Kuat, dan Bebas Pegal Memang menjadi Dambaan Semua Orang.
                </p>
                
                <p className="text-lg md:text-xl lg:text-2xl font-semibold text-green-600 leading-snug max-w-4xl mx-auto">
                  Khususnya Bagi Anda yang sudah memasuki Usia Produktif dengan Segudang Aktivitas
                </p>
              </div>
            </div>
            {/* Enhanced glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-300/60 to-green-400/60 rounded-2xl blur-xl -z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/40 to-green-500/40 rounded-2xl blur-2xl -z-10 scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/25 to-green-600/25 rounded-2xl blur-3xl -z-10 scale-110"></div>
          </div>
          
          {/* Feature 2 */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 md:p-12 border-2 border-green-300 shadow-xl relative z-10">
              <div className="text-center space-y-6">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-green-800 leading-tight tracking-wide">
                  KEAJAIBAN WARISAN LELUHUR
                </h3>
                
                <div className="w-16 h-0.5 bg-gradient-to-r from-green-600 to-green-400 mx-auto rounded-full"></div>
                
                <p className="text-lg md:text-xl lg:text-2xl font-bold text-green-700 leading-snug max-w-4xl mx-auto">
                  Memiliki Tubuh Segar, Tanpa Nyeri dan Bebas Luka Memang menjadi Harapan Setiap Keluarga.
                </p>
                
                <p className="text-lg md:text-xl lg:text-2xl font-semibold text-green-600 leading-snug max-w-4xl mx-auto">
                  Khususnya Bagi Anda yang Mengutamakan Kesembuhan Alami Tanpa Bahan Kimia.
                </p>
              </div>
            </div>
            {/* Enhanced glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/60 to-green-500/60 rounded-2xl blur-xl -z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/40 to-green-600/40 rounded-2xl blur-2xl -z-10 scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/25 to-green-700/25 rounded-2xl blur-3xl -z-10 scale-110"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fitur;