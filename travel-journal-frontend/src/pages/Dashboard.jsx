import React, { useState } from "react";
import AddMemory from "../components/AddMemory";
import MemoryList from "../components/MemoryList";
import MapView from "../components/MapView";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("add");

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* 🔝 Navbar */}
      <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-indigo-600">Travel Journal 🌍</h1>
        <div className="space-x-4">
          <button
            onClick={() => setActiveTab("add")}
            className={`px-4 py-2 rounded ${activeTab === "add" ? "bg-indigo-500 text-white" : "bg-gray-200"}`}
          >
            Add Memory
          </button>
          <button
            onClick={() => setActiveTab("list")}
            className={`px-4 py-2 rounded ${activeTab === "list" ? "bg-indigo-500 text-white" : "bg-gray-200"}`}
          >
            My Memories
          </button>
          <button
            onClick={() => setActiveTab("map")}
            className={`px-4 py-2 rounded ${activeTab === "map" ? "bg-indigo-500 text-white" : "bg-gray-200"}`}
          >
            Map View
          </button>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* 📦 Content */}
      <div className="p-6">
        {activeTab === "add" && <AddMemory />}
        {activeTab === "list" && <MemoryList />}
        {activeTab === "map" && <MapView />}
      </div>
    </div>
  );
};

export default Dashboard;

