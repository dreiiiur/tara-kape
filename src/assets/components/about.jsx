import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function About() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Heading */}
      <div className="text-center mt-16 max-w-5xl mx-auto ">
        <h1 className="text-4xl font-bold text-gray-800 capitalize max-w-5xl mx-auto md:text-2xl sm:text-3xl lg:text-4xl">
          We make{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
            your coffee
          </span>{" "}
          delicious more than a cup. Experience the best coffee beans,
          handcrafted brews, and exceptional taste.
        </h1>
        <p className="mt-4 text-gray-600 max-w-5xl  mx-auto text-lg">
          At our coffee shop, we believe in more than just a caffeine fix. Every
          cup we serve tells a story of carefully sourced beans, skilled
          baristas, and the joy of sharing a warm drink with friends or taking a
          peaceful moment for yourself. Come join us on a journey through
          flavor, aroma, and a true love for coffee.
        </p>

        <div className="flex justify-center mt-8 gap-4">
          <button className="bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-full font-semibold hover:transition ease-in-out duration-300">
            <a onClick={() => navigate("/shop")} className="cursor-pointer ">
              Shop Now
            </a>
          </button>
          <button className="border-2 font-semibold border-orange-500 hover:bg-orange-500 hover:text-white text-orange-500 py-3 px-6 rounded-full hover:transition ease-in-out duration-300  ">
            <a onClick={() => navigate("/shop")} className="cursor-pointer ">
              Contact Us
            </a>
          </button>
        </div>
      </div>

      <div className=" py-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center">
          Don’t take our word for it.
          <br />{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
            Trust our customers
          </span>
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {/* Testimonial Card */}
          <div className="bg-white border rounded-lg p-6 shadow-sm flex flex-col justify-between">
            <p className="text-gray-700 mb-4">
              "I've been a regular customer of Tara Kape for years, and I can't
              recommend them enough. The coffee is always exceptional, and the
              staff is always friendly and helpful."
            </p>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center">
                <img src="src/assets/images/customer1.jpg" alt="Customer Avatar"

                    className="w-10 h-10 rounded-full mr-3"
                  />
                <div>
                  <p className="font-semibold text-gray-800">Aespa Karina</p>
                  <p className="text-sm text-gray-500">Customer</p>
                </div>
              </div>
              <div className="flex items-center text-gray-400 space-x-2">
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5..."></path>
                  </svg>
                  <span>1k</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 2H4a2 2 0 00-2 2v16l4-4h14a2..."></path>
                  </svg>
                  <span>500</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-2">23 Mar 2025</p>
          </div>

          {/* Testimonial Card */}
          <div className="bg-white border rounded-lg p-6 shadow-sm flex flex-col justify-between">
            <p className="text-gray-700 mb-4">
              "I've been a regular customer of Tara Kape for years, and I can't
              recommend them enough. The coffee is always exceptional, and the
              staff is always friendly and helpful."
            </p>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center">
                <img src="src/assets/images/customer2.jpg" alt="Customer Avatar"

                    className="w-10 h-10 rounded-full mr-3"
                  />
                <div>
                  <p className="font-semibold text-gray-800">Rosmar</p>
                  <p className="text-sm text-gray-500">Customer</p>
                </div>
              </div>
              <div className="flex items-center text-gray-400 space-x-2">
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5..."></path>
                  </svg>
                  <span>1k</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 2H4a2 2 0 00-2 2v16l4-4h14a2..."></path>
                  </svg>
                  <span>500</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-2">23 Mar 2025</p>
          </div>

          {/* Testimonial Card */}
          <div className="bg-white border rounded-lg p-6 shadow-sm flex flex-col justify-between">
            <p className="text-gray-700 mb-4">
              "I've been a regular customer of Tara Kape for years, and I can't
              recommend them enough. The coffee is always exceptional, and the
              staff is always friendly and helpful."
            </p>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center">
                <img src="src/assets/images/customer3.png" alt="Customer Avatar"

                    className="w-10 h-10 rounded-full mr-3"
                  />
                <div>
                  <p className="font-semibold text-gray-800">Joel</p>
                  <p className="text-sm text-gray-500">Customer</p>
                </div>
              </div>
              <div className="flex items-center text-gray-400 space-x-2">
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5..."></path>
                  </svg>
                  <span>1k</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 2H4a2 2 0 00-2 2v16l4-4h14a2..."></path>
                  </svg>
                  <span>500</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-2">23 Mar 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}
