import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
//import app from './firebase';

export default function Login() {
  // const [data, setData] = useState([]);
  // const db = getFirestore(app);
  // useEffect(() => {
  //   async function fetchData() {
  //     const querySnapshot = await getDocs(collection(db, "your_collection_name"));
  //     const newData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  //     setData(newData);
  //   }
  //   fetchData();
  // }, []);

    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const loginButton = () => {
        if (email === "admin@gmail.com" && password === "admin") {
            navigate("/admin");
        } else {
            alert("Invalid email or password");
        }
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
                      onClick={() => navigate("/login")}
                      className="hover:text-orange-500 cursor-pointer"
                    >
                      Login
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
      <main className="flex-grow bg-gray-100 py-12 items-center">
        <div className="container mx-auto px-4 justify-center">
          <div className="bg-white p-6 rounded shadow-md max-w-lg mx-auto">
            <h2 className="text-2xl text-green-800 font-bold mb-4 text-center">Login</h2>
            <form className="space-y-6">
              <div className="mb-4">
                <label className="block text-green-800 font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full p-2 border rounded"
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="w-full p-2 border rounded"
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className="absolute top-0 right-0 mt-2 mr-2"
                  onClick={togglePasswordVisibility}
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
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </button>
              </div>
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full" type="button" onClick={loginButton}>
                Login
              </button>
            </form>

            <div className="mt-4 text-center">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <a href="/register" className="text-green-600 hover:underline">
                  Register
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
