import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
//import app from './firebase';
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

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
      {/* Main Content */}
      <main className="flex-grow bg-gray-100 py-20 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg ">
          {/* Heading */}
          <div className="flex flex-col gap-3 mb-4">
            <h2 className="text-2xl font-bold text-start text-black">
              Welcome Back
            </h2>
            <p className=" text-gray-600">Please enter your credentials for you to log in.</p>
          </div>

          {/*other options*/}
          <div className="flex flex-row gap-2 mb-4">
            <button
              type="button"
              className="flex items-center w-full justify-center border border-gray-400 rounded-lg p-2 hover:bg-gray-100"
            >
              <FaGoogle className="mr-2" /> Google
            </button>
            <button
              type="button"
              className="flex items-center justify-center w-full gap-2 border border-gray-400 rounded-lg p-2 hover:bg-gray-100 "
            >
              <FaFacebook className="mr-2"/> Facebook
            </button>
          </div>

          {/* separator line */}
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-600 whitespace-nowrap">or continue with</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <form className="space-y-5">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 pr-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute top-8 right-3 text-gray-500 hover:text-black"
                onClick={togglePasswordVisibility}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      showPassword
                        ? "M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-.445.032-.883.094-1.312M9.172 9.172A3 3 0 1112 12m0 0a3 3 0 003.172-2.828M15.828 15.828L4.222 4.222"
                        : "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    }
                  />
                </svg>
              </button>
            </div>

            {/* Login Button */}
            <button
              type="button"
              onClick={loginButton}
              className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-2 rounded-md transition duration-200"
            >
              Sign In
            </button>
          </form>

          {/* Register Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <a
                href="/register"
                className="text-black hover:underline font-medium"
              >
                Register
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
