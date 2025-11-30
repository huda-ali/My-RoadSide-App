import React, { useState } from "react";
import {
  Menu,
  X,
  Home,
  Wrench,
  Phone,
  Info,
  Star,
  Fuel,
  Truck,
  MapPin,
} from "lucide-react";

// --- Data for the Application ---

const ARABIC_CONTENT = {
  title: "ونش إنقاذ الهنا", // Sultan's Rescue Tow Truck
  nav: {
    home: "الرئيسية",
    services: "خدماتنا",
    contact: "اتصل بنا",
    about: "عن الشركة",
  },
  hero: {
    title: "خدمات ونش إنقاذ وسحب",
    tagline:
      "نقدم خدمات سحب وإنقاذ السيارات بسرعة وكفاءة، مع أسطول يعمل على مدار الساعة لتلبية احتياجاتكم في أي وقت.",
    phone1: "01285651617",
    phone2: "01028293074",
    cta: "اتصل الآن",
    img: "assets/promo1.jpeg",
  },
  services: {
    mainTitle: "خدماتنا",
    list: [
      {
        id: 1,
        title: "خدمة إنقاذ وسحب",
        description:
          "خدمة سحب السيارات المتاحة 24/7 بأسعار تنافسية. نصل إليك أينما كنت.",
        img: "assets/service1.jpeg",
      },
      {
        id: 2,
        title: "تغيير الإطارات السريع",
        description:
          "نقدم خدمة تغيير إطارات سريعة واحترافية على الطريق لضمان سلامتك.",
        img: "assets/service2.jpeg",
      },
      {
        id: 3,
        title: "توصيل الوقود السريع",
        description:
          "إذا نفد وقود سيارتك، سنقوم بتوصيل الوقود لك بسرعة لضمان عدم تعطل رحلتك.",
        img: "assets/service3.jpeg",
      },
      {
        id: 4,
        title: "خدمة الطوارئ الفورية",
        description:
          "استجابة فورية لحالات الطوارئ على مدار الساعة لضمان أقصى درجات السلامة والسرعة.",
        img: "assets/service4.jpeg",
      },
    ],
  },
  // NEW: Promotional images for the home page
  promoImages: [
    {
      id: 1,
      alt: "أرخص ونش إنقاذ سيارات",
      src: "assets/promo2.jpeg",
    },
    {
      id: 2,
      alt: "أسرع ونش إنقاذ",
      src: "assets/promo3.jpeg",
    },
  ],
  testimonials: {
    title: "آراء العملاء",
    list: [
      {
        review:
          "تجربتي كانت رائعة، استجابوا لطلبي فوراً وقدموا خدمة تغيير الإطارات بشكل احترافي.",
        source: "أحمد م.",
      },
      {
        review:
          "فريق العمل محترف، ساعدوني في سحب سيارتي بسرعة وكفاءة. أنصح بالتعامل معهم بشدة.",
        source: "سارة ح.",
      },
      {
        review: "خدمة ممتازة وسريعة، أنصح الجميع بالتعامل مع ونش إنقاذ الهنا.",
        source: "محمد خ.",
      },
    ],
  },
  about: {
    mainTitle: "عن الشركة",
    sections: [
      {
        title: "رؤيتنا",
        content:
          "أن نكون الخيار الأول لخدمات إنقاذ السيارات في المنطقة من خلال التميز في السرعة والجودة.",
      },
      {
        title: "فريق محترف",
        content:
          "لدينا أسطول من الأوناش وفريق عمل مدرب على أعلى مستوى للتعامل مع كافة حالات الطوارئ بكفاءة.",
      },
      {
        title: "تغطية شاملة",
        content:
          "نعمل 24 ساعة في اليوم، 7 أيام في الأسبوع، لتغطية جميع احتياجاتكم على مدار الساعة.",
      },
    ],
  },
  contact: {
    mainTitle: "اتصل بنا",
    info: "إذا تعطلت سيارتك فجأة، فإن ونش إنقاذ الهنا هو خيارك الأمثل. يعمل فريقنا 24 ساعة على مدار اليوم وطوال أيام الأسبوع لخدمتكم.",
    ctaTitle: "اتصل بنا الآن",
    ctaText:
      "نحن هنا لخدمتكم على مدار الساعة. تواصلوا معنا للحصول على أفضل خدمات ونش إنقاذ السيارات في أي وقت.",
    mapTitle: "موقعنا الجغرافي",
    // Using a general map embed for Cairo as suggested by the context
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110502.82775796035!2d31.334139366601445!3d30.05948332029315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145831517446e507%3A0x6e268a68b5557766!2z2KzYqtin2YbYr9mH2YjYjCDYp9mE2YXZg9iq2Kgg2KfZhNmD2LHYqtmK2Kk!5e0!3m2!1sar!2seg!4v1701292020456!5m2!1sar!2seg",
  },
};

// --- Utility Components ---

const Header = ({ onNavigate, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { key: "home", label: ARABIC_CONTENT.nav.home, icon: Home },
    { key: "services", label: ARABIC_CONTENT.nav.services, icon: Wrench },
    { key: "about", label: ARABIC_CONTENT.nav.about, icon: Info },
    { key: "contact", label: ARABIC_CONTENT.nav.contact, icon: Phone },
  ];

  const handleNavigation = (page) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center flex-row-reverse">
        {/* Logo / Title */}
        <h1 className="text-2xl font-extrabold text-blue-800 tracking-wider">
          {ARABIC_CONTENT.title}
        </h1>

        {/* Desktop Navigation (RTL) */}
        <nav className="hidden md:flex flex-row-reverse space-x-4 space-x-reverse">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => handleNavigation(item.key)}
              className={`p-2 rounded-lg text-lg font-medium transition-colors duration-200 ${
                currentPage === item.key
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-blue-600 p-2 rounded-md transition-colors"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (RTL) */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-100 absolute w-full">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => handleNavigation(item.key)}
              className={`flex items-center w-full text-right p-4 border-b border-gray-100 ${
                currentPage === item.key
                  ? "bg-blue-50 text-blue-700"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <item.icon size={18} className="ml-3" />
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

const SectionTitle = ({ title }) => (
  <div className="text-center mb-12">
    <h2 className="text-4xl font-extrabold text-gray-800 relative inline-block pb-2">
      {title}
      {/* Blue underline accent for RTL style */}
      <span className="absolute bottom-0 right-0 h-1 w-1/2 bg-blue-500 rounded-full"></span>
    </h2>
  </div>
);

const CallToActionButton = ({ text, phone }) => (
  <a
    href={`tel:${phone}`}
    className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
    dir="rtl" // Explicitly setting direction for button text and icon placement
  >
    {text}
    <Phone size={18} className="mr-3" /> {/* Icon is on the left in RTL */}
  </a>
);

// --- Page Components ---

const HomeSection = ({ onNavigate }) => (
  <div>
    {/* Hero Section */}
    <div className="bg-gray-50 pt-16 pb-20 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row-reverse items-center justify-between gap-10">
        {/* Text Content (RTL) */}
        <div className="lg:w-1/2 text-right">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            {ARABIC_CONTENT.hero.title}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {ARABIC_CONTENT.hero.tagline}
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:space-x-reverse flex flex-col sm:flex-row-reverse justify-end sm:justify-start">
            <CallToActionButton
              text={ARABIC_CONTENT.hero.cta}
              phone={ARABIC_CONTENT.hero.phone1}
            />
            <div className="flex flex-col text-gray-700 text-lg font-bold text-right">
              {/* Phone numbers section */}
              <a
                href={`tel:${ARABIC_CONTENT.hero.phone1}`}
                className="hover:text-blue-600 transition"
              >
                {ARABIC_CONTENT.hero.phone1}
              </a>
              <a
                href={`tel:${ARABIC_CONTENT.hero.phone2}`}
                className="hover:text-blue-600 transition"
              >
                {ARABIC_CONTENT.hero.phone2}
              </a>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 w-full mt-10 lg:mt-0 rounded-xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
          <img
            src={ARABIC_CONTENT.hero.img}
            alt="Tow Truck with Car"
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/1000x600/b72d2d/ffffff?text=Image+Unavailable";
            }}
          />
        </div>
      </div>
    </div>

    {/* Services Teaser Section */}
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle title={ARABIC_CONTENT.services.mainTitle} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ARABIC_CONTENT.services.list.slice(0, 4).map((service) => (
            <div
              key={service.id}
              className="bg-white border border-gray-100 rounded-xl shadow-lg p-6 text-center transform hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              dir="rtl"
            >
              <div className="flex justify-center mb-4">
                {/* Conditional icon rendering based on service ID */}
                {service.id === 1 && (
                  <Truck size={40} className="text-blue-600" />
                )}
                {service.id === 2 && (
                  <Wrench size={40} className="text-blue-600" />
                )}
                {service.id === 3 && (
                  <Fuel size={40} className="text-blue-600" />
                )}
                {service.id === 4 && (
                  <Phone size={40} className="text-blue-600" />
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-500">{service.description}</p>
              <div className="mt-4 rounded-lg overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-40 object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/400x300/b72d2d/ffffff?text=Service+Image";
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button
            onClick={() => onNavigate("services")}
            className="text-blue-600 hover:text-blue-800 font-semibold text-lg transition-colors border-b-2 border-blue-600 pb-1"
          >
            شاهد كل الخدمات &larr; {/* Right-to-left arrow */}
          </button>
        </div>
      </div>
    </div>

    {/* NEW: Promotional Images Section */}
    <div className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-12">
          عروضنا المميزة
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ARABIC_CONTENT.promoImages.map((promo) => (
            <div
              key={promo.id}
              className="rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
            >
              <img
                src={promo.src}
                alt={promo.alt}
                className="w-full h-auto object-cover"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/600x400/b72d2d/ffffff?text=Promo+Image+Unavailable";
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Testimonials Section */}
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle title={ARABIC_CONTENT.testimonials.title} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARABIC_CONTENT.testimonials.list.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-xl p-8 transform hover:shadow-2xl transition-shadow duration-300 text-right flex flex-col items-end"
              dir="rtl"
            >
              <Star
                className="text-yellow-400 mb-4"
                fill="currentColor"
                size={20}
              />
              <p className="text-lg text-gray-700 mb-4 italic">
                "{testimonial.review}"
              </p>
              {/* Source aligned left for better visual flow in testimonial block */}
              <p className="text-blue-600 font-bold mt-auto border-t border-gray-100 pt-3 w-full text-left">
                {testimonial.source}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const ServicesPage = () => (
  <div className="container mx-auto px-4 py-20 min-h-screen">
    <SectionTitle title={ARABIC_CONTENT.services.mainTitle} />
    <div className="space-y-16">
      {ARABIC_CONTENT.services.list.map((service, index) => (
        <div
          key={service.id}
          // Alternating image/text layout for better visual interest
          className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-8 bg-white p-6 rounded-xl shadow-2xl transition-all duration-500 hover:shadow-3xl`}
          dir="rtl"
        >
          {/* Image */}
          <div className="lg:w-1/2 w-full rounded-lg overflow-hidden shadow-lg">
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-80 object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/600x400/b72d2d/ffffff?text=Service+Image";
              }}
            />
          </div>
          {/* Text Content */}
          <div className="lg:w-1/2 text-right p-4">
            <h3 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-end">
              {/* Conditional icon rendering */}
              {service.id === 1 && <Truck className="ml-3 text-blue-600" />}
              {service.id === 2 && <Wrench className="ml-3 text-blue-600" />}
              {service.id === 3 && <Fuel className="ml-3 text-blue-600" />}
              {service.id === 4 && <Phone className="ml-3 text-blue-600" />}
              {service.title}
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              {service.description}
              <br />
              نحن ملتزمون بالوصول إليك في أسرع وقت ممكن، لنوفر لك المساعدة التي
              تحتاجها بأعلى مستوى من الاحترافية والأمان.
            </p>
            <div className="mt-6">
              <CallToActionButton
                text={ARABIC_CONTENT.hero.cta}
                phone={ARABIC_CONTENT.hero.phone1}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const AboutPage = () => (
  <div className="container mx-auto px-4 py-20 min-h-screen">
    <SectionTitle title={ARABIC_CONTENT.about.mainTitle} />
    <div className="bg-white p-8 md:p-12 rounded-xl shadow-2xl text-right">
      <p className="text-xl text-gray-700 mb-10 leading-relaxed font-semibold">
        نحن نقدم خدمات ونش إنقاذ السيارات بسرعة وكفاءة. مع أسطول يعمل على مدار
        الساعة لتلبية احتياجاتكم في أي وقت.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {ARABIC_CONTENT.about.sections.map((section, index) => (
          <div
            key={index}
            className="bg-blue-50 p-6 rounded-lg border-r-4 border-blue-600 shadow-md transform hover:shadow-xl transition-all duration-300"
            dir="rtl"
          >
            <div className="flex items-center justify-end mb-3">
              <h3 className="text-2xl font-bold text-gray-800">
                {section.title}
              </h3>
              <Info size={24} className="mr-3 text-blue-700" />
            </div>
            <p className="text-gray-600">{section.content}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <img
          src="assets/promo2.jpeg"
          alt="Our professional team and fleet"
          className="w-full rounded-lg shadow-xl"
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "assets/promo2.jpeg";
          }}
        />
      </div>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="container mx-auto px-4 py-20 min-h-screen">
    <SectionTitle title={ARABIC_CONTENT.contact.mainTitle} />

    {/* Contact Info */}
    <div
      className="bg-white p-8 md:p-12 rounded-xl shadow-2xl text-right mb-12"
      dir="rtl"
    >
      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        {ARABIC_CONTENT.contact.info}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-2xl font-bold text-blue-700">
        <div className="flex items-center justify-end">
          <a
            href={`tel:${ARABIC_CONTENT.hero.phone1}`}
            className="hover:text-blue-900 transition mr-2"
          >
            {ARABIC_CONTENT.hero.phone1}
          </a>
          <Phone size={24} className="ml-3" />
        </div>
        <div className="flex items-center justify-end">
          <a
            href={`tel:${ARABIC_CONTENT.hero.phone2}`}
            className="hover:text-blue-900 transition mr-2"
          >
            {ARABIC_CONTENT.hero.phone2}
          </a>
          <Phone size={24} className="ml-3" />
        </div>
      </div>
    </div>

    {/* Geographical Location / Map */}
    <div className="text-right mb-12" dir="rtl">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6 flex items-center justify-end">
        <MapPin className="ml-3 text-blue-600" size={28} />
        {ARABIC_CONTENT.contact.mapTitle}
      </h2>
      <div className="rounded-xl overflow-hidden shadow-2xl h-96 w-full">
        {/* Embedded Google Map */}
        <iframe
          src={ARABIC_CONTENT.contact.mapEmbed}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Geographical Location"
        ></iframe>
      </div>
    </div>

    {/* CTA Block (Image 4aa47d.png bottom section) */}
    <div className="bg-blue-100 p-8 md:p-12 rounded-xl text-center shadow-inner">
      <h2 className="text-3xl font-extrabold text-blue-800 mb-4">
        {ARABIC_CONTENT.contact.ctaTitle}
      </h2>
      <p className="text-xl text-blue-700 mb-6">
        {ARABIC_CONTENT.contact.ctaText}
      </p>
      <CallToActionButton
        text={ARABIC_CONTENT.hero.cta}
        phone={ARABIC_CONTENT.hero.phone1}
      />
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8 mt-12">
    <div className="container mx-auto px-4 text-center" dir="rtl">
      <h3 className="text-2xl font-bold text-blue-400 mb-4">
        {ARABIC_CONTENT.title}
      </h3>
      <p className="text-sm text-gray-400">
        جميع الحقوق محفوظة &copy; {new Date().getFullYear()} ونش إنقاذ الهنا
      </p>
      <div className="flex justify-center space-x-4 space-x-reverse mt-4">
        <a
          href={`tel:${ARABIC_CONTENT.hero.phone1}`}
          className="text-gray-400 hover:text-blue-400 transition"
        >
          <Phone size={20} />
        </a>
        {/* Placeholder for social media links */}
        <a href="#" className="text-gray-400 hover:text-blue-400 transition">
          {/* Using an arbitrary icon for link placeholder */}
          <Truck size={20} />
        </a>
      </div>
    </div>
  </footer>
);

// --- Main App Component ---

const App = () => {
  // State to manage page navigation: 'home', 'services', 'about', 'contact'
  const [currentPage, setCurrentPage] = useState("home");

  // Function to render the correct page content
  const renderPage = () => {
    switch (currentPage) {
      case "services":
        return <ServicesPage />;
      case "about":
        return <AboutPage />;
      case "contact":
        return <ContactPage />;
      case "home":
      default:
        // Pass the navigation function to HomeSection for internal link clicks
        return <HomeSection onNavigate={setCurrentPage} />;
    }
  };

  return (
    // Set the primary direction for the entire application to RTL
    <div className="min-h-screen bg-gray-50 font-inter" dir="rtl">
      <style>
        {`
                    /* Basic RTL adjustments for common elements */
                    html { direction: rtl; }
                    /* Applying a clean, modern Arabic-friendly font (Cairo) */
                    @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap');
                    .font-inter {
                        font-family: 'Cairo', sans-serif;
                    }
                `}
      </style>

      <Header onNavigate={setCurrentPage} currentPage={currentPage} />

      <main className="flex-grow">{renderPage()}</main>

      <Footer />
    </div>
  );
};

export default App;
