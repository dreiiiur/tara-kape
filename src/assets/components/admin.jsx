import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MdOutlineSpaceDashboard,
  MdOutlineInventory2,
  MdPayment,
  
} from "react-icons/md";
import { FaChartBar } from "react-icons/fa";
import { PiUsersThreeFill } from "react-icons/pi";
import { BiCoffeeTogo } from "react-icons/bi";
import { TbLogout } from "react-icons/tb";
import { LineChart } from "@mui/x-charts/LineChart";

export default function AdminDashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const salesData = [
    { month: "Jan", sales: 500 },
    { month: "Feb", sales: 700 },
    { month: "Mar", sales: 650 },
    { month: "Apr", sales: 800 },
    { month: "May", sales: 900 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white shadow-md">
        <div className="p-6 border-b">
          <h1 className="text-3xl font-bold text-black">
            <span className="italic font-serif">Tara</span>{" "}
            <span className="text-orange-500">Kape</span>
          </h1>
        </div>

        <nav className="p-4 text-md hidden md:block">
          <ul className="space-y-4">
            {[
              { icon: MdOutlineSpaceDashboard, text: "Dashboard" },
              { icon: PiUsersThreeFill, text: "Users" },
              { icon: BiCoffeeTogo, text: "Orders" },
              { icon: MdOutlineInventory2, text: "Inventory" },
              { icon: MdPayment, text: "Payments" },
            ].map(({ icon: Icon, text }) => (
              <li key={text}>
                <a
                  onClick={() => navigate("/admin")}
                  className="w-full text-gray-700 hover:bg-orange-100 hover:text-orange-500 hover:rounded-full py-2 px-4 cursor-pointer flex items-center"
                >
                  <Icon className="mr-2" />
                  {text}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={() => {
                  localStorage.removeItem("admin");
                  navigate("/login");
                }}
                className="w-full text-red-600 bg-red-200 rounded-full hover:bg-red-300 hover:text-white py-2 px-4 cursor-pointer flex items-center"
              >
                <TbLogout className="mr-2" />
                Log out
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center md:hidden">
          <h2 className="text-2xl font-bold text-green-800 tracking-wide">
            Admin Dashboard
          </h2>
          <button onClick={toggleMenu} className="text-green-600 font-semibold">
            {isMenuOpen ? (
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
            ) : (
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </header>

        {/* Mobile Sidebar */}
        {isMenuOpen && (
          <div className="md:hidden bg-white p-4 shadow-md">
            <ul className="space-y-4">
              {["Dashboard", "Products", "Orders"].map((item) => (
                <li key={item}>
                  <a
                    onClick={() => navigate("/admin")}
                    className="block text-gray-700 font-semibold hover:bg-green-100 hover:text-green-600 rounded-full py-2 px-4 cursor-pointer"
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    localStorage.removeItem("admin");
                    navigate("/login");
                  }}
                  className="w-full text-red-600 bg-red-100 rounded-full hover:bg-red-500 hover:text-white py-2 px-4 cursor-pointer"
                >
                  Log out
                </button>
              </li>
            </ul>
          </div>
        )}

        {/* Dashboard Body */}
        <main className="p-6 space-y-6">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center bg-pink-100 text-pink-800 p-6 rounded-2xl shadow-md">
              <PiUsersThreeFill className="text-3xl mr-4" />
              <div>
                <p className="text-xl font-bold">697</p>
                <p className="text-sm">Users</p>
              </div>
            </div>

            <div className="flex items-center bg-green-100 text-green-800 p-6 rounded-2xl shadow-md">
              <BiCoffeeTogo className="text-3xl mr-4" />
              <div>
                <p className="text-xl font-bold">41</p>
                <p className="text-sm">Orders</p>
              </div>
            </div>

            <div className="flex items-center bg-blue-100 text-blue-800 p-6 rounded-2xl shadow-md">
              <MdOutlineInventory2 className="text-3xl mr-4" />
              <div>
                <p className="text-xl font-bold">3</p>
                <p className="text-sm">Orders: In Transit</p>
              </div>
            </div>

            <div className="flex items-center bg-orange-100 text-orange-800 p-6 rounded-2xl shadow-md">
              <MdPayment className="text-3xl mr-4" />
              <div>
                <p className="text-xl font-bold">$5,790</p>
                <p className="text-sm">Total Sales</p>
              </div>
            </div>
          </div>

          {/* Sales Analytics */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h4 className="text-xl font-bold  mb-4 flex items-center">
              <FaChartBar 
                className="text-orange-500 mr-2"
                size={24}
              />
              Sales Analytics
            </h4>
            <div className="overflow-x-auto">
              <div className="min-w-[600px]">
                <LineChart
                  xAxis={[
                    {
                      id: "months",
                      data: salesData.map((d) => d.month),
                      label: "Month",
                      scaleType: "band",
                    },
                  ]}
                  series={[
                    {
                      id: "sales",
                      data: salesData.map((d) => d.sales),
                      label: "Sales",
                      color: "#16a34a",
                    },
                  ]}
                  width={700}
                  height={300}
                  slotProps={{
                    legend: {
                      direction: "row",
                      position: {
                        vertical: "top",
                        horizontal: "middle",
                      },
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
