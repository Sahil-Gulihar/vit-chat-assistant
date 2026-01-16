import heroImage from "@/assets/hero-campus.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Apply Links */}
        <div className="flex justify-center gap-8 mb-8">
          <a href="#" className="text-vit-gold font-semibold hover:underline flex items-center gap-2">
            VITEEE 2026 - Apply now
            <span className="bg-red-500 text-white text-[10px] px-1 rounded">NEW</span>
          </a>
          <span className="text-white/50">|</span>
          <a href="#" className="text-vit-gold font-semibold hover:underline flex items-center gap-2">
            MBA Admissions VITBEE 2026 - Apply now
            <span className="bg-red-500 text-white text-[10px] px-1 rounded">NEW</span>
          </a>
        </div>

        {/* Main Banner */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-vit-navy/90 to-vit-navy-light/90 rounded-lg overflow-hidden">
          <div className="p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <span className="text-white font-heading font-bold text-sm">VIT</span>
              </div>
              <span className="text-white/80 text-sm">Business School</span>
            </div>
            
            <p className="text-white/80 text-lg mb-2">One-of-its kind</p>
            <h2 className="text-white font-heading text-4xl md:text-5xl font-bold mb-2">
              Blended
            </h2>
            <h1 className="text-vit-gold font-heading text-6xl md:text-7xl font-extrabold mb-4">
              MBA
            </h1>
            <p className="text-white/70 text-sm mb-8">
              (Specialisation in Business Analytics)
            </p>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="text-white/80">
                <p className="font-semibold">World class faculty</p>
                <p className="text-white/60">expertise</p>
              </div>
              <div className="text-white/80 border-x border-white/20 px-4">
                <p className="font-semibold">Integrated curriculum</p>
                <p className="text-white/60">in AI & Analytics</p>
              </div>
              <div className="text-white/80">
                <p className="font-semibold">Strong Placement</p>
                <p className="text-white/60">support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Side Buttons */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-20">
        <a
          href="#"
          className="bg-vit-gold text-vit-navy font-bold py-8 px-3 rounded-l-lg writing-mode-vertical text-sm hover:bg-vit-gold/90 transition"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          Apply Now
        </a>
        <a
          href="#"
          className="bg-vit-navy-light text-white font-bold py-8 px-3 rounded-l-lg writing-mode-vertical text-sm hover:bg-vit-navy transition"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          Admission Enquiry
        </a>
      </div>
    </section>
  );
};

export default Hero;
