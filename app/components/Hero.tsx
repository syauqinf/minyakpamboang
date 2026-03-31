interface HeroProps {
  'data-aos'?: string;
}

const Hero: React.FC<HeroProps> = ({ 'data-aos': dataAos }) => {
 return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-transparent py-24" data-aos={dataAos}>
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Full Image with Rounded Frame */}
        <div className="relative w-full h-full space-y-6">
          {/* Hero Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white max-w-4xl mx-auto">
            <img 
              src="/hero.jpg" 
              alt="Minyak Pamboang Pusaka" 
              className="w-full h-auto object-contain"
            />
          </div>
          
          {/* Bawah Hero Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white max-w-4xl mx-auto">
            <img 
              src="/bawahhero.png" 
              alt="Minyak Pamboang Bawah" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
