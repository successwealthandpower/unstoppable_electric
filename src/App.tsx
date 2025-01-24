import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { Zap, Phone, Clock, Power, Shield, MapPin, Mail, Facebook, Instagram, Linkedin, Factory, Home, Building2, Wheat, AlertTriangle, Construction } from 'lucide-react';
import Contact from './Contact';
import AgentPopup from './AgentPopup';

const services = [
  {
    title: 'Residential Service',
    description: 'Complete electrical solutions for homes, from repairs to new installations.',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
  },
  {
    title: 'Commercial Service',
    description: 'Professional electrical services for businesses and commercial properties.',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
  },
  {
    title: 'Farm/Agricultural Service',
    description: 'Specialized electrical solutions for farms and agricultural facilities.',
    icon: Wheat,
    image: 'https://cdn.pixabay.com/photo/2019/08/21/15/11/farm-4421270_1280.jpg'
  },
  {
    title: 'Industrial Service',
    description: 'Heavy-duty electrical systems for industrial applications and facilities.',
    icon: Factory,
    image: 'https://images.unsplash.com/photo-1513828742140-ccaa28f3eda0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Emergency Service',
    description: '24/7 emergency electrical services when you need them most.',
    icon: AlertTriangle,
    image: 'https://g3electrical.com/wp-content/uploads/2022/06/elec-repair-hero.webp'
  },
  {
    title: 'New Construction',
    description: 'Complete electrical systems for new builds and renovation projects.',
    icon: Construction,
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80'
  },
  {
    title: 'Panel Upgrades',
    description: 'Modern electrical panel installations and upgrades for increased power capacity.',
    icon: Zap,
    image: 'https://cdn.pixabay.com/photo/2018/05/18/00/16/meter-3410068_1280.jpg'
  },
  {
    title: 'Generator Installations',
    description: 'Professional generator installation and maintenance services.',
    icon: Power,
    image: 'https://www.generac.com/globalassets/residential/resources/cold-weather-prep-guide/generator-winter-storm.png'
  }
];

function HomePage() {
  const [activeService, setActiveService] = useState(services[0]);

  useEffect(() => {
    // Check for hash in URL and scroll if present
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const openChatAssistant = () => {
    // @ts-ignore - Voiceflow types not available
    if (window.voiceflow?.chat?.open) {
      window.voiceflow.chat.open();
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 relative bg-blue-900 text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="Cityscape at dusk"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Southwest Wisconsin's Trusted Residential, Commercial, and Agricultural Electrician</h1>
            <p className="text-xl mb-8">Licensed, insured, and delivering guaranteed electrical solutions since 2025.</p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Shield className="w-6 h-6 text-yellow-500" />
                <span>Licensed and insured</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6 text-yellow-500" />
                <span>On-time service guarantee</span>
              </div>
              <div className="flex items-center space-x-3">
                <Zap className="w-6 h-6 text-yellow-500" />
                <span>Post-installation site cleanup</span>
              </div>
            </div>
            <button 
              onClick={openChatAssistant}
              className="bg-yellow-500 text-blue-900 px-8 py-3 rounded-full font-semibold text-lg hover:bg-yellow-400 transition-colors"
            >
              Request Free Real Time Estimate
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">Our Services</h2>
          <p className="text-xl text-center text-gray-600 mb-12">Comprehensive Electrical Solutions for Homes and Businesses</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="grid grid-cols-2 gap-4">
              {services.map((service) => (
                <button
                  key={service.title}
                  onClick={() => setActiveService(service)}
                  className={`p-4 rounded-lg border-2 transition-colors ${
                    activeService.title === service.title
                      ? 'border-yellow-500 bg-white'
                      : 'border-gray-200 hover:border-yellow-500'
                  }`}
                >
                  <service.icon className="w-6 h-6 text-yellow-500 mb-2" />
                  <h3 className="font-semibold text-blue-900">{service.title}</h3>
                </button>
              ))}
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">{activeService.title}</h3>
              <p className="text-gray-600 mb-6">{activeService.description}</p>
              {activeService.image && (
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">About Us</h2>
            <p className="text-gray-600 mb-8">
              Deeply rooted in Spring Green, WI, Unstoppable Electric is your trusted partner for all electrical needs. 
              Our commitment to safety, reliability, and exceptional service has made us the go-to electrical contractor 
              in the region. We take pride in our community involvement and our team's dedication to delivering 
              high-quality electrical solutions for residential, commercial, and agricultural clients.
            </p>
            <button className="bg-blue-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

function App() {
  const [showAgentPopup, setShowAgentPopup] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAgentPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  const handleNavigation = (sectionId: string) => {
    if (location.pathname === '/') {
      // If on home page, just scroll to section
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on another page, navigate to home with hash
      navigate(`/${sectionId}`);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button onClick={handleLogoClick} className="flex items-center space-x-2">
            <Zap className="w-8 h-8 text-yellow-500" />
            <span className="text-2xl font-bold text-blue-900">Unstoppable Electric</span>
          </button>
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavigation('#services')} 
              className="text-gray-600 hover:text-blue-900"
            >
              Services
            </button>
            <button 
              onClick={() => handleNavigation('#about')} 
              className="text-gray-600 hover:text-blue-900"
            >
              About
            </button>
            <Link 
              to="/contact" 
              onClick={() => window.scrollTo(0, 0)} 
              className="text-gray-600 hover:text-blue-900"
            >
              Contact
            </Link>
            <button className="bg-yellow-500 text-blue-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 transition-colors flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              (608) 927-6947
            </button>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {showAgentPopup && (
        <AgentPopup onClose={() => setShowAgentPopup(false)} />
      )}

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Zap className="w-6 h-6 text-yellow-500" />
                <span className="text-xl font-bold">Unstoppable Electric</span>
              </div>
              <p className="text-gray-300">
                Your trusted electrical contractor in Spring Green, WI
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-300 hover:text-white">Services</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-white">About</a></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-300">(608) 927-6947</li>
                <li className="text-gray-300">unstoppableelectric2025@gmail.com</li>
                <li className="text-gray-300">Spring Green, WI</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} Unstoppable Electric. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;