"use client";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.escuelajs.co/api/v1/categories/1/products`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [1]);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="bg-[#E5E5E5] flex flex-row w-screen h-screen text-black">
      <div className="w-60 bg-white border-r p-4 flex flex-col">
        <h1 className="text-xl font-bold mb-6">Company</h1>
        <nav className="space-y-3 flex flex-col">
          <a href="#" className="text-gray-600 hover:text-black">
            Dashboard
          </a>
          <a href="/" className="text-black font-semibold">
            Products
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            Sales
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            Customers
          </a>
          <a href="/analytics" className="text-gray-600 hover:text-black">
            Analytics
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            Notifications
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            Settings
          </a>
        </nav>
      </div>

      <div className="flex-1 p-6 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6">Products - Clothes</h2>

        <div className="flex flex-col bg-white w-full h-11/12 rounded-3xl p-6 overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Products List</h3>
            <div className="flex flex-row justify-between items-center space-x-6 ml-auto">
              <button className="w-20 h-10 rounded-lg border">Filter</button>
              <button className="w-20 h-10 rounded-lg border">See All</button>
              <button className="w-20 h-10 rounded-lg bg-black text-white">
                + Add
              </button>
            </div>
          </div>

          <div className="flex flex-row font-semibold border-b py-2 text-gray-600 gap-45">
            <span className="ml-15">Product Name</span>
            <span className="ml-30">Category</span>
            <span className="ml-10">Price</span>
            <span className="ml-10">Status</span>
            <span >Action</span>
          </div>

          {
            data.map((p) => (
              <div
                key={p.id}
                className="flex items-center justify-between py-3 border-b"
              >
                <div className="flex items-center gap-4 min-w-[30%]">
                  <img
                    src={p.images[0]}
                    alt={p.title}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <span className="font-medium truncate">{p.title}</span>
                </div>

                <span className="min-w-[15%] text-gray-600 truncate">
                  {p.category.name}
                </span>

                <span className="min-w-[10%]">${p.price}</span>

                <span className="min-w-[10%] px-2 py-1 text-sm rounded bg-green-100 text-green-700 text-center">
                  Active
                </span>

                <button className="min-w-[10%] text-blue-600 hover:underline">
                  Delete
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
