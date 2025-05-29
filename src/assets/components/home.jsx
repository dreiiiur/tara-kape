import { useNavigate } from "react-router-dom";
import { useState } from "react";
import heroImg from "../../assets/images/hero.jpg";
import heroImg2 from "../../assets/images/hero2.jpg";

import { create } from 'zustand'
import Header from "./header";

export default function Home() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [sliderIndex, setSliderIndex] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-gray-800">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-white overflow-hidden shadow-sm">
          <div className="absolute inset-0 bg-black">
            <img
              src={heroImg}
              alt="Hero Background"
              className="w-full h-full object-cover opacity-50"
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32 flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                A Cup of Coffee for Everyone
              </h1>
              <p className="text-lg text-gray-200 mb-8 max-w-xl">
                Discover Tara Kape – premium beans, hand-crafted brews, and exceptional taste.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => navigate("/shop")}
                  className="bg-white text-green-800 px-6 py-3 rounded-md text-base font-medium hover:shadow-sm transition duration-300"
                >
                  Order Now
                </button>
                <button
                  onClick={() => navigate("/about")}
                  className="border border-white px-6 py-3 rounded-md text-base text-white font-medium hover:shadow-sm transition"
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="flex-1 relative">
              <img
                src="src/assets/images/hero-coffee.png"
                alt="Premium Coffee Package"
                className="w-11/12 max-w-md mx-auto rounded-xl"
              />
            </div>
          </div>
          <div className="bg-[#222] text-white py-3 text-center text-xs tracking-wider uppercase font-semibold">
            Artisan Roasts ★ Fresh Beans ★ Sustainable Sourcing
          </div>
        </section>

        {/* Categories */}
        <section className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-gray-900 mb-3">Categories</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Browse coffee types & find your favorite blend.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[{ label: "Cold Brew", path: "/ColdBrew", icon: "🥶" },
              { label: "Espresso", path: "/Espresso", icon: "☕" },
              { label: "Hot Brew", path: "/HotBrew", icon: "🔥" },
              { label: "Frappe", path: "/Frappe", icon: "🧊" },
              { label: "Pastries", path: "/Pastries", icon: "🥐" }].map(({ label, path, icon }) => (
              <button
                key={label}
                onClick={() => navigate(path)}
                className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-full shadow-sm hover:shadow transition text-gray-700"
              >
                <span>{icon}</span>
                <span className="font-medium">{label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 bg-gray-50">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-gray-900 mb-3">Top Picks</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Handcrafted favorites curated just for you.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
            {[{ id: 1, name: "Blonde Roast", price: "$12.99", rating: 4.5, description: "Smooth and creamy roast with a light flavor.", image: "src/assets/images/coffee.jpg" },
              { id: 2, name: "Espresso Roast", price: "$14.49", rating: 4.8, description: "Bold, rich, and deeply satisfying espresso.", image: "src/assets/images/coffee.jpg" },
              { id: 3, name: "Cold Brew Blend", price: "$11.75", rating: 4.6, description: "Chilled, refreshing brew with a mild kick.", image: "src/assets/images/coffee.jpg" },
            { id: 3, name: "Cold Brew Blend", price: "$11.75", rating: 4.6, description: "Chilled, refreshing brew with a mild kick.", image: "src/assets/images/coffee.jpg" }].map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow hover:shadow-md transition">
                <img src={product.image} alt={product.name} className="w-full h-60 object-cover rounded-t-lg" />
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-1">{product.name}</h3>
                  <p className="text-gray-500 text-sm mb-2">{product.description}</p>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-green-700 font-bold">{product.price}</span>
                    <span className="text-yellow-500 text-sm">
                      {"★".repeat(Math.floor(product.rating))} <span className="text-gray-400">{product.rating.toFixed(1)}</span>
                    </span>
                  </div>
                  <button className="w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-600 transition font-medium">
                    Buy
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About / Story Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="w-full md:w-1/2">
              <img src={heroImg2} alt="About Us" className="w-full rounded-xl shadow" />
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-green-700 font-medium italic mb-2">World of Coffee</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Tara Kape is a small, family-owned coffee roaster based in <strong>Bulacan, Philippines</strong>. We believe that great coffee is a combination of high-quality beans, careful roasting, and a commitment to sustainability.
              </p>
              <p className="text-gray-600 mb-6">
                Our roasting philosophy brings out the natural flavors of each bean, without artificial flavorings or preservatives — ensuring a rich, nuanced cup every time.
              </p>
              <button className="bg-green-800 text-white px-6 py-3 rounded-md hover:bg-green-700 transition font-medium">
                Read More
              </button>
            </div>
          </div>
        </section>
        
        {/* Gallery Section */}
<section className="py-20 bg-gray-100">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-4xl font-semibold text-gray-900 text-center mb-8">Photo Gallery</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {[
        "/src/assets/images/gall1.jpg",
          "/src/assets/images/gall2.jpg",
          "/src/assets/images/gall3.jpg"
      ].map((src, index) => (
        <div key={index} className="overflow-hidden rounded-xl shadow hover:scale-105 transition-transform duration-300">
          <img src={src} alt={`Gallery ${index + 1}`} className="w-full h-60 object-cover" />
        </div>
      ))}
    </div>
  </div>
</section>

{/* Slider Section */}
<section className="py-20 bg-white">
  <div className="max-w-5xl mx-auto px-4">
    <h2 className="text-4xl font-semibold text-gray-900 text-center mb-8">Experience the Brew</h2>
    <div className="relative overflow-hidden">
      <div className="flex gap-4 transition-transform duration-500" style={{ transform: `translateX(-${sliderIndex * 100}%)` }}>
        {[
          "/src/assets/images/gall1.jpg",
          "/src/assets/images/gall2.jpg",
          "/src/assets/images/gall3.jpg"
        ].map((src, index) => (
          <div key={index} className="min-w-full">
            <img src={src} alt={`Slide ${index + 1}`} className="w-full h-96 object-cover rounded-xl shadow" />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex justify-between items-center px-4">
        <button
          onClick={() => setSliderIndex((prev) => (prev === 0 ? 2 : prev - 1))}
          className="bg-white bg-opacity-70 hover:bg-opacity-100 text-gray-700 px-3 py-2 rounded-full shadow"
        >
          ←
        </button>
        <button
          onClick={() => setSliderIndex((prev) => (prev === 2 ? 0 : prev + 1))}
          className="bg-white bg-opacity-70 hover:bg-opacity-100 text-gray-700 px-3 py-2 rounded-full shadow"
        >
          →
        </button>
      </div>
    </div>
  </div>
</section>

       
      </main>
    </div>
  );
}