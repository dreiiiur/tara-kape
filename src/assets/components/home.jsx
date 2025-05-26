import { useNavigate } from "react-router-dom";
import { useState } from "react";
import heroImg from "../../assets/images/hero.jpg";
import heroImg2 from "../../assets/images/hero2.jpg";

import { create } from 'zustand'
import Header from "./header";

export default function Home() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

 
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (

    <div
      className="min-h-screen flex flex-col overflow-y-hidden"
      style={{ overflowX: "hidden" }}
    >
    
      {/* Main Content */}
      <main className="flex-grow">
        <section
          className="relative bg-cover bg-center h-[100vh]"
          style={{ backgroundImage: `url(${heroImg})` }}
        >
          <div className="absolute inset-0 bg-black/60 z-0"></div>
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="container mx-auto px-4 text-center max-w-auto">
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight">
                A Cup of Coffee for Everyone!
              </h2>
              <p className="text-gray-200 text-base sm:text-lg mb-6 max-w-2xl mx-auto text-center">
                Tara Kape is a coffee shop located in the heart of the city. We
                offer a wide selection of coffee beans, teas, and other
                beverages to satisfy your cravings.
              </p>
              <button className="bg-white text-green-800 hover:bg-green-800 hover:text-white font-bold py-3 px-10 rounded-lg transition duration-300 ease-in-out hover:scale-105" onClick={() => navigate("/shop")}>
                Shop Now
              </button>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 mb-10 mt-10">
          <div className="flex justify-center items-center py-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-green-800 text-center">
              Categories
            </h2>
          </div>
          <div className="flex justify-center gap-4 px-2 sm:px-0 pb-4 sm:pb-0">
            {[
              { label: "Cold Brew", path: "/ColdBrew" },
              { label: "Espresso", path: "/Espresso" },
              { label: "Hot Brew", path: "/HotBrew" },
              { label: "Frappe", path: "/Frappe" },
              { label: "Pastries", path: "/Pastries" },
            ].map(({ label, path }) => (
              <button
                key={label}
                onClick={() => navigate(path)}
                className="flex-shrink-0 bg-green-800 hover:bg-green-700 text-white font-semibold py-2 px-5 sm:px-6 rounded-full shadow-md hover:scale-105 transition-all duration-300 ease-in-out"
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center bg-clip-text text-green-800 mb-12">
              Featured Products
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  id: 1,
                  name: "Blonde Roast",
                  price: "$12.99",
                  description:
                    "A classic coffee with a smooth and creamy taste.",
                  image:
                    "src/assets/images/coffee.jpg",
                },
                {
                  id: 2,
                  name: "Espresso Roast",
                  price: "$14.49",
                  description:
                    "A classic coffee with a smooth and creamy taste.",
                  image:
                    "src/assets/images/coffee.jpg",
                },
                {
                  id: 3,
                  name: "Cold Brew Blend",
                  price: "$11.75",
                  description:
                    "A classic coffee with a smooth and creamy taste.",
                  image:
                    "src/assets/images/coffee.jpg",
                },
                {
                  id: 4,
                  name: "Cold Brew Blend",
                  price: "$11.75",
                  description:
                    "A classic coffee with a smooth and creamy taste.",
                  image:
                    "src/assets/images/coffee.jpg",
                },
                {
                  id: 5,
                  name: "Classic Brew",
                  price: "$12.99",
                  description:
                    "A classic coffee with a smooth and creamy taste.",
                  image:
                    "src/assets/images/coffee.jpg",
                },
                {
                  id: 6,
                  name: "Espresso Roast",
                  price: "$14.49",
                  description:
                    "A classic coffee with a smooth and creamy taste.",
                  image:
                    "src/assets/images/coffee.jpg",
                },
                {
                  id: 7,
                  name: "Cold Brew Blend",
                  price: "$11.75",
                  description:
                    "A classic coffee with a smooth and creamy taste.",
                  image:
                    "src/assets/images/coffee.jpg",
                },
                {
                  id: 8,
                  name: "Cold Brew Blend",
                  price: "$11.75",
                  description:
                    "A classic coffee with a smooth and creamy taste.",
                  image:
                    "src/assets/images/coffee.jpg",
                },
              ].map((product) => (
                <div
                  key={product.id}
                  className="bg-white/30 backdrop-blur-md border border-white/10 shadow-lg rounded-lg overflow-hidden p-6 hover:shadow-2xl transition"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-60 object-cover rounded-xl mb-5"
                  />
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 mb-4 italic">
                    {product.description}
                  </p>
                  <p className="text-green-800 mb-4">{product.price}</p>
                  <button className="bg-green-800 hover:bg-green-700 text-white py-2 px-5 rounded-md w-full font-semibold">
                    Buy Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Website short description */}
      <section className="py-20 bg-[#fefefe]">
        <div className="container mx-auto px-4 flex flex-col md:flex-row-reverse items-start">
          <div className="w-full md:w-1/2 md:pl-8 max-h-1/2 md:max-h-full">
            <img
              src={heroImg2}
              alt="About Us"
              className="w-full h-1/4 md:h-1/2 object-cover rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 md:pr-8">
            <p className="text-green-600 font-semibold mb-2 italic">
              World of Coffee
            </p>
            <h2 className="text-4xl font-bold mb-4 text-green-800">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Tara Kape is a small, family-owned coffee roaster based in
              <b> Bulacan, Philippines</b>. We believe that great coffee is a
              combination of high-quality beans, careful roasting, and a
              commitment to sustainability. We source our beans from the best
              small farms around the world, and roast them in small batches to
              ensure that every cup is as fresh and flavorful as possible.
            </p>
            <p className="text-gray-600  mb-6">
              Our roasting philosophy is simple: we want to bring out the
              natural flavors of the beans, without adding any artificial
              flavorings or preservatives. We believe that this approach results
              in a more nuanced and complex cup of coffee, with a deeper flavor
              profile.
            </p>
            <button className="bg-green-800 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300 ease-in-out">
              Read More
            </button>
          </div>
        </div>
      </section>

      
    </div>
  );
}

