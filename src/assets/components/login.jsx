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
     
      {/* Main Content */}
   <main className="flex-grow bg-gray-100 py-20 flex items-center justify-center min-h-screen">
  <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
    <h2 className="text-3xl font-bold text-center text-green-700 mb-6">Welcome Back</h2>

    <form className="space-y-5">
      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="example@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {/* Password Field */}
      <div className="relative">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 pr-10"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="button"
          className="absolute top-8 right-3 text-gray-500 hover:text-green-600"
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
              d={showPassword
                ? "M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-.445.032-.883.094-1.312M9.172 9.172A3 3 0 1112 12m0 0a3 3 0 003.172-2.828M15.828 15.828L4.222 4.222"
                : "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"}
            />
          </svg>
        </button>
      </div>

      {/* Login Button */}
      <button
        type="button"
        onClick={loginButton}
        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition duration-200"
      >
        Sign In
      </button>
    </form>

    {/* Register Link */}
    <div className="mt-6 text-center">
      <p className="text-sm text-gray-600">
        Don't have an account?{" "}
        <a href="/register" className="text-green-600 hover:underline font-medium">
          Register
        </a>
      </p>
    </div>
  </div>
</main>

    </div>
  );
}
