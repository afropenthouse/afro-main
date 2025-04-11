import './styles.scss'

const logos = [
  { src: '/images/partner1.png', alt: 'Triol' },
  { src: '/images/parter2.png', alt: 'Honeywell' },
  { src: '/images/partner3.png', alt: 'Ilshin Valve Co., Ltd.' },
  { src: '/images/partner4.png', alt: 'Ultraspin' },
  { src: '/images/partner5.png', alt: 'Straatman' },
];

const LogoSlider = () => {
  return (
    <div className="w-full overflow-hidden bg-white py-10 mt-[3rem]">
      <div className="relative">
        <div className="flex animate-slide">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div
              key={`logo-1-${index}`}
              className="min-w-[300px] px-8 flex items-center justify-center"
            >
              <div className="bg-white logoMain rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 w-full h-[180px] flex items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-[200px] max-h-[80px] object-contain"
                />
              </div>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div
              key={`logo-2-${index}`}
              className="min-w-[300px] px-8 flex items-center justify-center"
            >
              <div className="bg-white rounded-lg p-6 logoMain hover:shadow-lg transition-shadow duration-300 w-full h-[180px] flex items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-[200px] max-h-[80px] object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;