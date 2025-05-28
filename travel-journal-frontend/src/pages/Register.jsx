import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // ✅ Moved navigation inside

const Register = () => {
  const navigate = useNavigate(); // ✅ Now you can use it directly

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirm) {
      alert("❌ Passwords do not match");
      return;
    }

    // try {
    //   await axios.post("http://localhost:5050/api/register", {
    //     username: name, // ✅ backend expects 'username'
    //     email,
    //     password,
    //   });

    //   alert("✅ Registered successfully! Please login.");
    //   navigate("/login"); // ✅ Redirect to login page
    // } catch (err) {
    //   console.error(err);
    //   alert(
    //     err?.response?.data?.msg ||
    //     err?.response?.data?.error ||
    //     "❌ Registration failed. Try again."
    //   );
    // }

  //   try {
  //     await axios.post("http://localhost:5050/api/register", {
  //       username: name,
  //       email,
  //       password,
  //     }, {
  //       // withCredentials: true, // ✅ Important for cookies/auth
  //       headers: {
  //         "Content-Type": "application/json",
  //       }
  //     });
    
  //     // success logic
  //   } catch (err) {
  //     console.error("❌ Registration failed:", err);
  //     alert("Registration failed. Try again.");
  //   }
    
  // };

  try {
    await axios.post("http://localhost:5050/api/register", {
      username: name,
      email,
      password,
    }, {
      headers: { "Content-Type": "application/json" },
    });
  
    // ✅ Show success + redirect
    alert("✅ Registered successfully! Redirecting to login...");
    navigate("/login");
  } catch (err) {
    console.error("❌ Registration failed:", err);
  
    const msg = err?.response?.data?.msg || err?.response?.data?.error;
  
    // ✅ If user already exists
    if (err.response?.status === 409) {
      alert("⚠️ Email already registered. Please log in.");
      navigate("/login");
    } else {
      alert(msg || "❌ Registration failed. Try again.");
    }
  }
  };  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-blue-100 to-indigo-300">
      <form
        onSubmit={handleRegister}
        className="bg-white p-8 rounded-2xl shadow-xl w-96"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>

        <input
          className="w-full p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="w-full p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="w-full p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          className="w-full p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="Confirm Password"
          type="password"
          onChange={(e) => setConfirm(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold p-3 rounded transition-all duration-200"
        >
          Register
        </button>

        <p
          className="mt-4 text-sm text-center text-indigo-700 cursor-pointer"
          onClick={() => navigate("/login")} // ✅ Updated
        >
          Already have an account? Login
        </p>
      </form>
    </div>
  );
};

export default Register;
