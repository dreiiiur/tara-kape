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
