import { useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";

export default function Shop() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [count, setCount] = useState(1);

  useEffect(() => {
    document.title = `Quantity${count}`;
     if (count >= 10) {
      const button = document.getElementById("endCount");
      if (button) {
        button.disabled = true;
      }
    }
    else {
      const button = document.getElementById("endCount");
      if (button) {
        button.disabled = false;
      }
    }
  }, [count]);


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
            <span className="text-green-600">Kape</span>
          </h1>
          <nav className="hidden md:block">
            <div className="flex space-x-8 text-black">
              {/* Desktop Navigation */}
              <div className="flex items-center space-x-8">
                <ul className="flex space-x-8">
                  <li>
                    <a
                      onClick={() => navigate("/")}
                      className="hover:text-green-600 cursor-pointer hover:underline"
                    >
                      Home
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
                      onClick={() => navigate("/about")}
                      className="hover:text-orange-500 cursor-pointer"
                    >
                      About
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
                    <a
                      onClick={() => navigate("/location")}
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
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded hidden md:block"
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
                strokeWidth="2"
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
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded"
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
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <div className="flex flex-col items-center space-y-4 p-4 bg-gray-100 rounded-md shadow-md">
        <p className="text-lg font-semibold text-gray-700">Quantity <span className="font-bold text-green-600">{count}</span></p>
        <div className="flex space-x-4">
          <button 
            onClick={() => setCount(count + 1)} 
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 font-bold"
          id="endCount">
            +
          </button>
          <button 
            onClick={() => setCount(count - 1)} 
            className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 font-bold"
          >
            -
          </button>
         
        </div>
      </div>

      {/* Footer */}
    </div>
  );
}

