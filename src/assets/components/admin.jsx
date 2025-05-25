import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md hidden md:block">
        <div className="p-6 border-b">
          <h1 className="text-4xl font-bold text-black">
            <span className="italic font-serif">Tara</span>{" "}
            <span className="text-green-600">Kape</span>
          </h1>
        </div>
        <nav className="p-4">
          <ul className="space-y-4">
            <li>
              <a
                onClick={() => navigate("/admin")}
                className="block text-gray-700 font-semibold hover:bg-green-100 hover:text-green-600 py-2 px-4 rounded cursor-pointer"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                onClick={() => navigate("/admin/products")}
                className="block text-gray-700 font-semibold hover:bg-green-100 hover:text-green-600 py-2 px-4 rounded cursor-pointer"
              >
                Products
              </a>
            </li>
            <li>
              <a
                onClick={() => navigate("/admin/orders")}
                className="block text-gray-700 font-semibold hover:bg-green-100 hover:text-green-600 py-2 px-4 rounded cursor-pointer"
              >
                Orders
              </a>
            </li>
            <li>
              <a
                onClick={() => navigate("/admin/profile")}
                className="block text-gray-700 font-semibold hover:bg-green-100 hover:text-green-600 py-2 px-4 rounded cursor-pointer"
              >
                My Profile
              </a>
            </li>
            <li>
              <button
                onClick={() => {
                  localStorage.removeItem("admin");
                  navigate("/login");
                }}
                className="block text-gray-700 font-semibold hover:bg-red-500 hover:text-white py-2 px-4 rounded cursor-pointer w-full text-left"
              >
                Log out
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Admin Dashboard</h2>
          <button
            onClick={toggleMenu}
            className="md:hidden text-green-600 font-semibold"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </header>

        {/* Mobile Sidebar */}
        {isMenuOpen && (
          <div className="md:hidden bg-white p-4 shadow-md">
            <ul className="space-y-4">
            <li>
              <a
                onClick={() => navigate("/admin")}
                className="block text-gray-700 font-semibold hover:bg-green-100 hover:text-green-600 py-2 px-4 rounded cursor-pointer"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                onClick={() => navigate("/admin/products")}
                className="block text-gray-700 font-semibold hover:bg-green-100 hover:text-green-600 py-2 px-4 rounded cursor-pointer"
              >
                Products
              </a>
            </li>
            <li>
              <a
                onClick={() => navigate("/admin/orders")}
                className="block text-gray-700 font-semibold hover:bg-green-100 hover:text-green-600 py-2 px-4 rounded cursor-pointer"
              >
                Orders
              </a>
            </li>
            <li>
              <button
                onClick={() => {
                  localStorage.removeItem("admin");
                  navigate("/login");
                }}
                className="block text-gray-700 font-semibold hover:bg-red-500 hover:text-white py-2 px-4 rounded cursor-pointer w-full text-left"
              >
                Log out
              </button>
            </li>
          </ul>
          </div>
        )}

        {/* Dashboard Content */}
        <main className="flex-1 p-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Welcome, Admin!
            </h3>
            <p className="text-gray-600">
              Use the navigation to manage products, orders, and more.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
