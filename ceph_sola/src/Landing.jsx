
import { useState, useEffect } from 'react';
import { ArrowDown, Battery, Building, Sun, Thermometer, Award, Check } from 'lucide-react';

const Website = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const handleScroll = () => {
    const sections = ['hero', 'problem', 'solution', 'technology', 'market', 'contact'];
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    
    const currentSection = sections.find((section) => {
      const element = document.getElementById(section);
      if (!element) return false;
      const rect = element.getBoundingClientRect();
      return rect.top <= windowHeight/2 && rect.bottom >= windowHeight/2;
    });
    
    if (currentSection) {
      setActiveSection(currentSection);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-gradient-to-br from-blue-50 to-yellow-50">
        <nav className="fixed w-full bg-white/90 z-50 flex items-center px-6 py-4 shadow-sm">
        <div className="flex items-center space-x-3">
            <img src="logo.png" alt="Logo" className="h-8 w-8" />
            <h1 className="text-xl font-bold text-blue-600">CephaloCell</h1>
        </div>
        <ul className="ml-auto flex space-x-6 text-gray-600">
            <li><a href="#problem" className="hover:text-blue-600">Problem</a></li>
            <li><a href="#solution" className="hover:text-blue-600">Solution</a></li>
            <li><a href="#technology" className="hover:text-blue-600">Technology</a></li>
            <li><a href="#market" className="hover:text-blue-600">Market</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
        </nav>
        <div className="w-full px-4 sm:px-6 lg:px-8">

            {/* Hero Section */}
            <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-yellow-50 pt-16">
                <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">
                    Transform Your Windows Into
                    <br />
                    <span className="text-blue-600">Energy Generators</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                    Our revolutionary adhesive solar film technology will allow you to seamlessly integrate renewable energy into your building.
                    </p>
                    <div className="flex justify-center space-x-4">
                    <a href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                        Get Started
                    </a>
                    <a href="https://youtu.be/SMxw0nr14L0?feature=shared" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 px-8 py-3 rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors">
                        Watch the Film
                    </a>
                    </div>
                    <div className="mt-12">
                    <ArrowDown className="mx-auto text-blue-600 animate-bounce" size={32} />
                    </div>
                </div>
                </section>

            {/* Problem Section */}
            <section id="problem" className="min-h-screen flex items-center py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center mb-16 text-black">Changing the Face of our Cities
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-blue-50 p-8 rounded-xl">
                    <Building className="text-blue-600 mb-4" size={32} />
                    <h3 className="text-xl font-semibold mb-4 text-black">Limited Urban Space</h3>
                    <p className="text-gray-600">
                        Traditional solar panels require large roof areas, making them impractical for urban buildings with limited space.
                    </p>
                    </div>
                    <div className="bg-blue-50 p-8 rounded-xl">
                    <Thermometer className="text-blue-600 mb-4" size={32} />
                    <h3 className="text-xl font-semibold mb-4 text-black">Poor Thermal Management</h3>
                    <p className="text-gray-600">
                        Current solar windows suffer from efficiency losses due to heat buildup, with efficiency dropping 0.65% per °C increase.
                    </p>
                    </div>
                    <div className="bg-blue-50 p-8 rounded-xl">
                    <Battery className="text-blue-600 mb-4" size={32} />
                    <h3 className="text-xl font-semibold mb-4 text-black">Low Efficiency</h3>
                    <p className="text-gray-600">
                        Existing transparent solar solutions only achieve 3-5% efficiency, making them economically unfeasible.
                    </p>
                    </div>
                </div>
                </div>
            </section>

            <section id="solution"
        className="min-h-screen flex items-center py-24 bg-gradient-to-br from-blue-50 to-yellow-50"
        >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16 text-black">Our Solution</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Features */}
            <div>
                <h3 className="text-2xl font-semibold mb-6 text-black">
                Biomimetic Cooling Technology
                </h3>
                <ul className="space-y-4">
                {[
                    "Inspired by cephalopod thermal regulation",
                    "Microfluidic cooling channels maintain optimal temperature",
                    "15% efficiency - 3x better than competitors",
                    "Payback in under 5 years",
                    "Simple adhesive installation process",
                ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                    <Check className="text-green-500 flex-shrink-0" size={20} />
                    <span className="text-gray-600">{feature}</span>
                    </li>
                ))}
                </ul>
            </div>

            {/* Video Container */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="aspect-video bg-blue-100 rounded-lg mb-4 overflow-hidden">
                <video
                    src="Cephalocell1.1.mp4" // Replace with your video file path
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover rounded-lg"
                ></video>
                </div>
                <p className="text-sm text-gray-500 text-center">
                Transparent solar film with patented cooling technology
                </p>
            </div>
            </div>
        </div>
            </section>


            <section
        id="technology"
        className="min-h-screen flex items-center py-24 bg-white"
        >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16 text-black">
            Advanced Technology
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Features */}
            <div className="space-y-8 md:col-span-2">
                <div>
                <h3 className="text-xl font-semibold mb-4 text-black">
                    Quantum Dot Perovskite
                </h3>
                <p className="text-gray-600">
                    Our nanoparticle layer efficiently splits UV light into electrons and
                    holes, maximizing energy capture while maintaining transparency.
                </p>
                </div>
                <div>
                <h3 className="text-xl font-semibold mb-4 text-black">
                    Thermal Management
                </h3>
                <p className="text-gray-600">
                    Biomimetic cooling channels filled with Novec 7000 maintain optimal
                    operating temperature, preventing efficiency loss from heat buildup.
                </p>
                </div>
                <div>
                <h3 className="text-xl font-semibold mb-4 text-black">
                    Transparency
                </h3>
                <p className="text-gray-600">
                    Our product is strategically engineered to contain fully transparent
                    materials, allowing for maximum visibility and seamless integration.
                </p>
                </div>
            </div>

            {/* Performance Metrics Box */}
            <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-black">
                Performance Metrics
                </h3>
                <div className="space-y-4">
                <div>
                    <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">
                        Efficiency
                    </span>
                    <span className="text-sm font-medium text-blue-600">15%</span>
                    </div>
                    <div className="w-full bg-blue-200 rounded-full h-2">
                    <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: "75%" }}
                    ></div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">
                        Transparency
                    </span>
                    <span className="text-sm font-medium text-blue-600">95%</span>
                    </div>
                    <div className="w-full bg-blue-200 rounded-full h-2">
                    <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: "90%" }}
                    ></div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">
                        Heat Management
                    </span>
                    <span className="text-sm font-medium text-blue-600">95%</span>
                    </div>
                    <div className="w-full bg-blue-200 rounded-full h-2">
                    <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: "95%" }}
                    ></div>
                    </div>
                </div>
                </div>
            </div>

            {/* 2D Image Box */}
            <div className="bg-gray-100 p-8 rounded-xl shadow-lg">
                <img
                src="2d_pic.jpeg"
                alt="2D Film Design"
                className="w-full h-auto object-contain rounded-lg"
                />
                <p className="text-sm text-gray-500 text-center mt-4">
                Schematic of mechanism behind CephaloCell Film
                </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-xl shadow-lg">
                <img
                src="full_panel.jpeg"
                alt="2D Film Design"
                className="w-full h-auto object-contain rounded-lg"
                />
                <p className="text-sm text-gray-500 text-center mt-4">
                Full Panel View
                </p>
            </div>
            </div>
        </div>
            </section>


            <section
        id="market"
        className="min-h-screen flex items-center py-24 bg-gradient-to-br from-blue-50 to-yellow-50"
        >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16 text-black">
            Why Choose CephaloCell?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Environmental and Cost Savings */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-6 text-black">
                Transform Your Buildings
                </h3>
                <div className="space-y-4">
                <div>
                    <p className="text-3xl font-bold text-blue-600">15 Metric Tons</p>
                    <p className="text-sm text-gray-600">
                    CO<sub>2</sub> emissions saved annually for every 1,000 sq. ft.
                    </p>
                </div>
                <div>
                    <p className="text-3xl font-bold text-blue-600">500+ Trees</p>
                    <p className="text-sm text-gray-600">
                    Equivalent environmental benefit per 1,000 sq. ft.
                    </p>
                </div>
                <div>
                    <p className="text-3xl font-bold text-blue-600">5-Year Payback</p>
                    <p className="text-sm text-gray-600">
                    Potential energy cost savings in just five years
                    </p>
                </div>
                </div>
                <p className="mt-6 text-gray-600 text-center">
                Lower costs. Cleaner cities. A brighter future.
                </p>
            </div>

            {/* Target Audience */}
            <div>
                <h3 className="text-xl font-semibold mb-6 text-blue-700">
                Perfect for Building Owners
                </h3>
                <div className="space-y-6">
                <div>
                    <h4 className="font-medium mb-2 text-black">Commercial Developers</h4>
                    <p className="text-gray-600">
                    Achieve LEED certification and meet tenant sustainability demands
                    effortlessly.
                    </p>
                </div>
                <div>
                    <h4 className="font-medium mb-2 text-black">
                    Corporate Building Owners
                    </h4>
                    <p className="text-gray-600">
                    Save on energy costs while improving your building’s value and
                    environmental footprint.
                    </p>
                </div>
                <div>
                    <h4 className="font-medium mb-2 text-black">
                    Urban Property Managers
                    </h4>
                    <p className="text-gray-600">
                    Provide eco-conscious tenants with clean, sustainable energy
                    solutions.
                    </p>
                </div>
                </div>
                <p className="mt-6 text-gray-600 text-center">
                Join the movement toward cleaner, greener, and more resilient cities.
                </p>
            </div>
            </div>
        </div>
            </section>


            <section id="our-team" className="w-full bg-gray-100 py-16 px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Team</h2>
            <div className="flex flex-col items-center">
                <img src="team.jpeg" alt="Our Team" className="w-96 h-auto object-cover rounded shadow-lg" />
                <p className="mt-6 text-center text-lg text-gray-600 max-w-2xl">
                At the heart of CephaloCell are two passionate innovators—Subhi Stephan and 
                Akshara Kumar—united by a shared mission to revolutionize urban energy 
                systems. With backgrounds in engineering, environmental activism, design, and computer science, 
                Subhi and Akshara have created SolarFilm to empower building owners 
                to transition to renewable energy without compromising design or 
                efficiency. Subhi and Akshara believe in leading by example, 
                proving that small teams with bold ideas can create solutions
                that positively impact the planet. 
                </p>
            </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="min-h-screen flex items-center py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center mb-16 text-black">Get Started</h2>
                <div className="max-w-xl mx-auto">
                    <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                        </label>
                        <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                        </label>
                        <input
                        type="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                        </label>
                        <textarea
                        rows="4"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Contact Us
                    </button>
                    </form>
                </div>
                </div>
            </section>
        </div>
    </div>
  );
};

export default Website;