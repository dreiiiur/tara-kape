import { useNavigate } from "react-router-dom";
import { useState } from "react";
import heroImg from "../../assets/images/hero.jpg";

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
      {/* Header */}
      <header className="shadow-md bg-white">
        <div className="container mx-auto flex justify-between items-center py-6 px-4">
          <h1 className="text-4xl font-bold text-black">
            <span className="italic font-serif">Tara</span>{" "}
            <span className="text-green-500">Kape</span>
          </h1>
          <nav className="hidden md:block">
            <div className="flex space-x-8 text-black">
             
              {/* Desktop Navigation */}
              <div className="flex items-center space-x-8">
                <ul className="flex space-x-8">
                  <li>
                    <a
                      onClick={() => navigate("/")}
                      className="hover:text-orange-500 cursor-pointer"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => navigate("/")}
                      className="hover:text-orange-500 cursor-pointer"
                    >
                      Shop
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => navigate("/")}
                      className="hover:text-orange-500 cursor-pointer"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => navigate("/")}
                      className="hover:text-orange-500 cursor-pointer"
                    >
                      Contacts
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => navigate("/")}
                      className="hover:text-orange-500 cursor-pointer"
                    >
                      Location
                    </a>
                  </li>
                </ul>
                <form className="flex-1">
                  <div className="relative">
                    <input
                      type="search"
                      className="w-full py-2 px-4 text-black bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Search..."
                    />
                    <button
                      type="submit"
                      className="absolute right-0 top-0 mt-2 mr-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </nav>
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded hidden md:block"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button className="md:hidden" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-20">
            <nav className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-30">
              <ul className="flex flex-col p-6 space-y-4 text-black">
                <li>
                  <a
                    onClick={() => navigate("/")}
                    className="hover:text-orange-500 cursor-pointer"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => navigate("/about")}
                    className="hover:text-orange-500 cursor-pointer"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => navigate("/shop")}
                    className="hover:text-orange-500 cursor-pointer"
                  >
                    Shop
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => navigate("/contact")}
                    className="hover:text-orange-500 cursor-pointer"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <button
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </button>
                </li>
              </ul>
              <button
                className="absolute top-4 right-4 text-black hover:text-orange-500"
                onClick={toggleMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <section
          className="relative bg-cover bg-center h-[100vh]"
          style={{ backgroundImage: `url(${heroImg})` }}
        >
          <div className="absolute inset-0 bg-black/60 z-0"></div>
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="container mx-auto px-4 text-center max-w-2xl">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
                A Roasted Coffee <br className="hidden sm:block" /> For You
              </h2>
              <p className="text-white text-base sm:text-lg mb-6">
                The coffee is brewed by first roasting green beans over hot
                coals in a brazier—rich in tradition and taste.
              </p>
              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full transition">
                Shop Now
              </button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#fefefe]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-green-500 mb-12">
              Featured Products
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  id: 1,
                  name: "Classic Brew",
                  price: "$12.99",
                  description:
                    "A classic coffee with a smooth and creamy taste.",
                  image:
                    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
                },
                {
                  id: 2,
                  name: "Espresso Roast",
                  price: "$14.49",
                  description:
                    "A classic coffee with a smooth and creamy taste.",
                  image:
                    "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80",
                },
                {
                  id: 3,
                  name: "Cold Brew Blend",
                  price: "$11.75",
                  description:
                    "A classic coffee with a smooth and creamy taste.",
                  image:
                    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
                },
                {
                  id: 3,
                  name: "Cold Brew Blend",
                  price: "$11.75",
                  description:
                    "A classic coffee with a smooth and creamy taste.",
                  image:
                    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
                },
              ].map((product) => (
                <div
                  key={product.id}
                  className="bg-white/30 backdrop-blur-md border border-white/10 shadow-lg rounded-2xl overflow-hidden p-6 hover:scale-105 hover:shadow-2xl transition"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-60 object-cover rounded-xl mb-5"
                  />
                  <h3 className="text-xl font-bold text-green-500 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 mb-4">{product.description}</p>
                  <p className="text-gray-600 mb-4">{product.price}</p>
                  <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-5 rounded-lg w-full font-semibold">
                    Buy Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto text-center text-sm">
          &copy; {new Date().getFullYear()} Tara Kape. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
