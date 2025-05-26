import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { create } from "zustand";

export default function Shop() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const useCounter = create((set) => ({
    counter: 0,
    incrCounter: () => set((state) => ({ counter: state.counter + 1 })),
  }));

  const counter = useCounter((state) => state.counter);
  const incrCounter = useCounter((state) => state.incrCounter);

  const [count, setCount] = useState(1);

  useEffect(() => {
    document.title = `Quantity ${count}`;
    if (count >= 10) {
      const button = document.getElementById("endCount");
      if (button) {
        button.disabled = true;
      }
    } else if (count < 0) {
      setCount(0);
    }
  }, [count]);

  return (
    <div
      className="min-h-screen flex flex-col overflow-y-hidden bg-gray-100"
      style={{ overflowX: "hidden" }}
    >
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center space-y-4">
          <p className="text-lg font-semibold text-gray-700">
            Quantity <span className="font-bold text-green-600">{count}</span>
          </p>
          <div className="flex space-x-4">
            <button
              onClick={() => setCount(count + 1)}
              className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 font-bold"
              id="endCount"
            >
              +
            </button>
            <button
              onClick={() => setCount(count - 1)}
              className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 font-bold"
            >
              -
            </button>
            <div className="flex items-center space-x-2">
              <p className="text-gray-600">Counter: {counter}</p>
              <button
                onClick={incrCounter}
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold"
              >
                Incr. Counter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

