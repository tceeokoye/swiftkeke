"use client";

const steps = [
  {
    num: "01",
    title: "Register & Upload Docs",
    desc: "Create your account and upload your valid ID, driver's license, and vehicle documents.",
    img: "https://img.icons8.com/3d-fluency/94/document.png", // Document
  },
  {
    num: "02",
    title: "Get Verified Fast",
    desc: "Our team will quickly review your application and documents to ensure you meet all requirements.",
    img: "https://img.icons8.com/3d-fluency/94/security-checked.png", // Security Checked Shield
  },
  {
    num: "03",
    title: "Start Driving & Earning",
    desc: "Turn on the app, accept ride requests, and start making money on your own flexible schedule!",
    img: "https://img.icons8.com/3d-fluency/94/car.png", // Car
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 relative overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D21F3C]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text & Steps Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D21F3C]/10 border border-[#D21F3C]/20 text-[#D21F3C] text-sm font-bold mb-6">
              Simple Process
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-[#1A1A1A] mb-4">
              Start Earning in{" "}
              <span className="gradient-text">3 Easy Steps</span>
            </h2>
            <p className="text-[#555555] text-lg mb-10 leading-relaxed max-w-lg">
              We made the onboarding process as seamless as possible so you can hit the road and start earning faster.
            </p>

            <div className="space-y-8 relative">
              {/* Connecting Line */}
              <div className="absolute left-[38px] top-10 bottom-10 w-0.5 bg-gradient-to-b from-[#D21F3C]/40 to-transparent hidden sm:block" />

              {steps.map((step, i) => (
                <div key={i} className="relative flex gap-6 sm:gap-8 group">
                  {/* Image/Icon block */}
                  <div className="relative shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-[2rem] bg-white border border-gray-100 shadow-xl flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1 group-hover:border-[#D21F3C]/30">
                    <img 
                      src={step.img} 
                      alt={step.title} 
                      className="w-12 h-12 sm:w-14 sm:h-14 object-contain drop-shadow-md"
                    />
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#1A1A1A] text-white text-sm font-bold flex items-center justify-center shadow-lg border-2 border-white">
                      {step.num}
                    </div>
                  </div>

                  {/* Text block */}
                  <div className="pt-2 sm:pt-4">
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-2 group-hover:text-[#D21F3C] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-[#555555] leading-relaxed text-sm sm:text-base">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12">
              <a href="#register" className="inline-flex items-center justify-center px-8 py-4 bg-[#D21F3C] text-white font-bold rounded-xl shadow-lg shadow-[#D21F3C]/30 hover:bg-[#a8172d] hover:-translate-y-0.5 transition-all">
                Join Now
              </a>
            </div>
          </div>

          {/* Right Side Image Illustration */}
          <div className="relative mt-12 lg:mt-0 flex justify-center">
            {/* Soft decorative background circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#D21F3C]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#FDC300]/10 rounded-full blur-2xl pointer-events-none" />
            
            {/* Giant 3D Illustration */}
            <div className="relative z-10 w-full max-w-md animate-float">
               <img 
                 src="https://img.icons8.com/3d-fluency/400/taxi.png" 
                 alt="3D cartoon taxi" 
                 className="w-full h-auto drop-shadow-2xl"
               />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
