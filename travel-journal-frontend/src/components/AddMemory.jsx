



// // import React, { useState } from "react";
// // import axios from "axios";

// // const AddMemory = () => {
// //   const [title, setTitle] = useState("");
// //   const [caption, setCaption] = useState("");
// //   const [location, setLocation] = useState("");
// //   const [image, setImage] = useState(null);
// //   const [preview, setPreview] = useState(null);
// //   const [loading, setLoading] = useState(false);

// //   // 🌍 Auto-detect location using browser
// //   const fetchCurrentLocation = () => {
// //     if (!navigator.geolocation) {
// //       alert("Geolocation is not supported by your browser.");
// //       return;
// //     }

// //     navigator.geolocation.getCurrentPosition(
// //       (position) => {
// //         const coords = `${position.coords.latitude},${position.coords.longitude}`;
// //         setLocation(coords);
// //         alert("📍 Location fetched!");
// //       },
// //       (error) => {
// //         console.error("Location error:", error);
// //         alert("Could not fetch location.");
// //       }
// //     );
// //   };

// //   // 🖼️ Handle image preview
// //   // const handleImageChange = (e) => {
// //   //   const file = e.target.files[0];
// //   //   setImage(file);
// //   //   setPreview(URL.createObjectURL(file));
// //   // };

// //   // // 🚀 Submit memory
// //   // const handleSubmit = async (e) => {
// //   //   e.preventDefault();
// //   //   if (!title || !caption || !location || !image) {
// //   //     return alert("Please fill in all fields and upload an image.");
// //   //   }

// //   //   setLoading(true);

// //   //   try {
// //   //     // 1️⃣ Upload to Cloudinary
// //   //     const formData = new FormData();
// //   //     formData.append("file", image);
// //   //     formData.append("upload_preset", "dev_unsigned_upload"); // 🔁 Replace!
// //   //     const cloudRes = await axios.post(
// //   //       "https://api.cloudinary.com/v1_1/djpeig9ri/image/upload",
// //   //       formData
// //   //     );

// //   //     const imageUrl = cloudRes.data.secure_url;

// //   //     // 2️⃣ Post to your backend
// //   //     const token = localStorage.getItem("token");
// //   //     const memoryData = { title, caption, location, mediaUrls:[imageUrl] };

// //   //     await axios.post("http://localhost:5050/api/memories", memoryData, {
// //   //       headers: {
// //   //         Authorization: `Bearer ${token}`,
// //   //       },
// //   //     });

// //   //     alert("✅ Memory added!");
// //   //     setTitle("");
// //   //     setCaption("");
// //   //     setLocation("");
// //   //     setImage(null);
// //   //     setPreview(null);
// //   //   } catch (err) {
// //   //     console.error("❌ Error adding memory:", err.message);
// //   //     alert("Something went wrong.");
// //   //   }

// //   //   setLoading(false);
// //   // };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
  
// //     if (!title || !caption || !location || !image) {
// //       return alert("Please fill in all fields and upload an image.");
// //     }
  
// //     setLoading(true);
  
// //     try {
// //       // 1️⃣ Upload to Cloudinary
// //       const formData = new FormData();
// //       formData.append("file", image);
// //       formData.append("upload_preset", "dev_unsigned_upload");
  
// //       const cloudRes = await axios.post(
// //         "https://api.cloudinary.com/v1_1/djpeig9ri/image/upload",
// //         formData
// //       );
  
// //       const imageUrl = cloudRes.data.secure_url;
  
// //       // 2️⃣ Post to your backend
// //       const token = localStorage.getItem("token");
// //       const memoryData = {
// //         title,
// //         caption,
// //         location,
// //         imageUrls: [imageUrl], // ✅ wrap in array
// //         date: new Date().toISOString(),
// //       };
  
// //       await axios.post("http://localhost:5050/api/memories", memoryData, {
// //         headers: { Authorization: `Bearer ${token}` },
// //       });
  
// //       alert("✅ Memory added!");
// //       setTitle("");
// //       setCaption("");
// //       setLocation("");
// //       setImage(null);
// //       setPreview(null);
// //     } catch (err) {
// //       console.error("❌ Error adding memory:", err.message);
// //       alert("Something went wrong.");
// //     }
  
// //     setLoading(false);
// //   };
  

// //   return (
// //     <div className="bg-white p-6 rounded shadow-md max-w-xl mx-auto">
// //       <h2 className="text-xl font-bold mb-4">📸 Add New Memory</h2>
// //       <form onSubmit={handleSubmit} className="space-y-4">
// //         <input
// //           type="text"
// //           placeholder="Title"
// //           value={title}
// //           className="w-full p-3 border rounded"
// //           onChange={(e) => setTitle(e.target.value)}
// //         />
// //         <textarea
// //           placeholder="Caption"
// //           value={caption}
// //           className="w-full p-3 border rounded"
// //           onChange={(e) => setCaption(e.target.value)}
// //         />
// //         <div className="flex gap-2">
// //           <input
// //             type="text"
// //             placeholder="Location (city or coordinates)"
// //             value={location}
// //             className="flex-grow p-3 border rounded"
// //             onChange={(e) => setLocation(e.target.value)}
// //           />
// //           <button
// //             type="button"
// //             onClick={fetchCurrentLocation}
// //             className="px-3 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
// //           >
// //             📍 Use My Location
// //           </button>
// //         </div>
// //         <input
// //           type="file"
// //           accept="image/*"
// //           multiple 
// //           onChange={(e) => setImage(e.target.files[0])}
            
// //         />  
// //         {preview && (
// //           <img
// //             src={preview}
// //             alt="Preview"
// //             className="w-full h-60 object-cover rounded"
// //           />
// //         )}
// //         <button
// //           type="submit"
// //           disabled={loading}
// //           className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold p-3 rounded"
// //         >
// //           {loading ? "Uploading..." : "Add Memory"}
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default AddMemory;






























// import React, { useState } from "react";
// import axios from "axios";

// const AddMemory = () => {
//   const [title, setTitle] = useState("");
//   const [caption, setCaption] = useState("");
//   const [location, setLocation] = useState("");
//   const [image, setImage] = useState(null);
//   const [preview, setPreview] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [date, setDate] = useState("");


//   const fetchCurrentLocation = () => {
//     if (!navigator.geolocation) {
//       alert("Geolocation not supported");
//       return;
//     }

//     navigator.geolocation.getCurrentPosition(
//       (pos) => {
//         const coords = `${pos.coords.latitude},${pos.coords.longitude}`;
//         setLocation(coords);
//         alert("📍 Location fetched!");
//       },
//       (err) => {
//         console.error("Location error:", err);
//         alert("Couldn't fetch location");
//       }
//     );
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setImage(file);
//     setPreview(URL.createObjectURL(file));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!title || !caption || !location || !image) {
//       return alert("Fill all fields and select an image.");
//     }

//     setLoading(true);

//     try {
//       // Upload to Cloudinary
//       const formData = new FormData();
//       formData.append("file", image);
//       formData.append("upload_preset", "dev_unsigned_upload");

//       const cloudRes = await axios.post(
//         "https://api.cloudinary.com/v1_1/djpeig9ri/image/upload",
//         formData
//       );

//       const uploadedUrl = cloudRes.data.secure_url;

//       // Send to backend with imageUrls array
//       const memoryData = {
//         title,
//         caption,
//         location,
//         imageUrls: [uploadedUrl], // ✅ FIXED: This is now an array!
//         date: new Date(date).toISOString(),
//       };

//       const token = localStorage.getItem("token");
//       await axios.post("http://localhost:5050/api/memories", memoryData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       alert("✅ Memory added!");
//       setTitle("");
//       setCaption("");
//       setLocation("");
//       setImage(null);
//       setPreview(null);
//     } catch (err) {
//       console.error("❌ Error adding memory:", err.message);
//       alert("Error adding memory.");
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="bg-white p-6 rounded shadow-md max-w-xl mx-auto">
//       <h2 className="text-xl font-bold mb-4">📸 Add New Memory</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           placeholder="Title"
//           value={title}
//           className="w-full p-3 border rounded"
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <textarea
//           placeholder="Caption"
//           value={caption}
//           className="w-full p-3 border rounded"
//           onChange={(e) => setCaption(e.target.value)}
//         />

// <input
//   type="date"
//   value={date}
//   onChange={(e) => setDate(e.target.value)}
//   className="w-full p-3 border rounded"
// />

//         <div className="flex gap-2">
//           <input
//             type="text"
//             placeholder="Location"
//             value={location}
//             className="flex-grow p-3 border rounded"
//             onChange={(e) => setLocation(e.target.value)}
//           />
//           <button
//             type="button"
//             onClick={fetchCurrentLocation}
//             className="px-3 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
//           >
//             📍 Use My Location
//           </button>
//         </div>
//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleImageChange}
//           className="w-full"
//         />
//         {preview && (
//           <img
//             src={preview}
//             alt="Preview"
//             className="w-full h-60 object-cover rounded"
//           />
//         )}
//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold p-3 rounded"
//         >
//           {loading ? "Uploading..." : "Add Memory"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddMemory;
























//with carousel

// src/components/AddMemory.jsx
// import React, { useState } from "react";
// import axios from "axios";

// const AddMemory = () => {
//   const [title, setTitle] = useState("");
//   const [caption, setCaption] = useState("");
//   const [location, setLocation] = useState("");
//   const [date, setDate] = useState("");
//   const [images, setImages] = useState([]);
//   const [previews, setPreviews] = useState([]);
//   const [loading, setLoading] = useState(false);
 


//   const fetchCurrentLocation = () => {
//     if (!navigator.geolocation) {
//       alert("Geolocation is not supported.");
//       return;
//     }

//     navigator.geolocation.getCurrentPosition(
//       (pos) => {
//         const coords = `${pos.coords.latitude},${pos.coords.longitude}`;
//         setLocation(coords);
//         alert("📍 Location fetched!");
//       },
//       (err) => {
//         alert("Failed to fetch location.");
//         console.error(err);
//       }
//     );
//   };

//   const handleImageChange = (e) => {
//     const files = Array.from(e.target.files);
//     setImages(files);
//     const previewUrls = files.map((file) => URL.createObjectURL(file));
//     setPreviews(previewUrls);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!title || !caption || !location || !date || images.length === 0) {
//       return alert("Please fill all fields and upload images.");
//     }

//     setLoading(true);

//     try {
//       const uploadedUrls = [];

//       for (const file of images) {
//         const formData = new FormData();
//         formData.append("file", file);
//         formData.append("upload_preset", "dev_unsigned_upload"); // Replace if needed

//         const res = await axios.post(
//           "https://api.cloudinary.com/v1_1/djpeig9ri/image/upload",
//           formData
//         );

//         uploadedUrls.push(res.data.secure_url);
//       }

//       const memoryData = {
//         title,
//         caption,
//         location,
//         date: new Date(date).toISOString(),
//         imageUrls: uploadedUrls,
//       };

//       const token = localStorage.getItem("token");
//       await axios.post("http://localhost:5050/api/memories", memoryData, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       alert("✅ Memory added!");
//       setTitle("");
//       setCaption("");
//       setLocation("");
//       setDate("");
//       setImages([]);
//       setPreviews([]);
//     } catch (err) {
//       console.error("❌ Error adding memory:", err.message);
//       alert("Something went wrong.");
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="bg-white p-6 rounded shadow-md max-w-xl mx-auto">
//       <h2 className="text-xl font-bold mb-4">📸 Add New Memory</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           placeholder="Title"
//           value={title}
//           className="w-full p-3 border rounded"
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <textarea
//           placeholder="Caption"
//           value={caption}
//           className="w-full p-3 border rounded"
//           onChange={(e) => setCaption(e.target.value)}
//         />
//         <input
//           type="date"
//           value={date}
//           className="w-full p-3 border rounded"
//           onChange={(e) => setDate(e.target.value)}
//         />
//         <div className="flex gap-2">
//           <input
//             type="text"
//             placeholder="Location"
//             value={location}
//             className="flex-grow p-3 border rounded"
//             onChange={(e) => setLocation(e.target.value)}
//           />
//           <button
//             type="button"
//             onClick={fetchCurrentLocation}
//             className="px-3 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
//           >
//             📍 Auto-Locate
//           </button>
//         </div>
//         <input
//           type="file"
//           accept="image/*"
//           multiple
//           onChange={handleImageChange}
//           className="w-full"
//         />
//         <div className="flex flex-wrap gap-2">
//           {previews.map((src, i) => (
//             <img key={i} src={src} alt={`preview-${i}`} className="w-24 h-24 object-cover rounded" />
//           ))}
//         </div>
//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold p-3 rounded"
//         >
//           {loading ? "Uploading..." : "Add Memory"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddMemory;


















// after map changes,loc,drop downs..etc

import React, { useState } from "react";
import axios from "axios";

const AddMemory = () => {
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [location, setLocation] = useState(""); // lat,lng
  const [placeName, setPlaceName] = useState(""); // new
  const [date, setDate] = useState("");
  const [images, setImages] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [loading, setLoading] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // 🔍 Search autocomplete from Nominatim
  const fetchSuggestions = async (query) => {
    setSearchQuery(query);
    if (!query) return setSuggestions([]);

    try {
      const res = await axios.get(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`
      );
      setSuggestions(res.data);
    } catch (err) {
      console.error("Error fetching suggestions:", err);
    }
  };

  const handleSelectSuggestion = (place) => {
    setSearchQuery(place.display_name);
    setLocation(`${place.lat},${place.lon}`);
    setPlaceName(place.display_name);
    setSuggestions([]);
  };

  // 📍 Browser Geolocation
  const fetchCurrentLocation = async () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const coords = `${pos.coords.latitude},${pos.coords.longitude}`;
        setLocation(coords);
        setSearchQuery(coords);

        try {
          const res = await axios.get(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`
          );
          setPlaceName(res.data.display_name);
          setSearchQuery(res.data.display_name);
        } catch (err) {
          console.error("Reverse geocoding failed:", err);
        }

        alert("📍 Location fetched!");
      },
      (err) => {
        alert("Failed to fetch location.");
        console.error(err);
      }
    );
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
    setPreviews(files.map((file) => URL.createObjectURL(file)));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !caption || !location || !date || images.length === 0) {
      return alert("Please fill all fields and upload images.");
    }

    setLoading(true);

    try {
      const uploadedUrls = [];

      for (const file of images) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "dev_unsigned_upload");

        const res = await axios.post(
          "https://api.cloudinary.com/v1_1/djpeig9ri/image/upload",
          formData
        );

        uploadedUrls.push(res.data.secure_url);
      }

      const memoryData = {
        title,
        caption,
        location,
        placeName,
        date: new Date(date).toISOString(),
        imageUrls: uploadedUrls,
      };

      const token = localStorage.getItem("token");
      await axios.post("http://localhost:5050/api/memories", memoryData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert("✅ Memory added!");
      setTitle("");
      setCaption("");
      setLocation("");
      setPlaceName("");
      setSearchQuery("");
      setDate("");
      setImages([]);
      setPreviews([]);
    } catch (err) {
      console.error("❌ Error adding memory:", err.message);
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className="bg-white p-6 rounded shadow-md max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">📸 Add New Memory</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          className="w-full p-3 border rounded"
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Caption"
          value={caption}
          className="w-full p-3 border rounded"
          onChange={(e) => setCaption(e.target.value)}
        />
        <input
          type="date"
          value={date}
          className="w-full p-3 border rounded"
          onChange={(e) => setDate(e.target.value)}
        />

        {/* 📍 Location Search + Suggestions */}
        <div className="flex flex-col gap-1">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search for a location"
              value={searchQuery}
              className="flex-grow p-3 border rounded"
              onChange={(e) => fetchSuggestions(e.target.value)}
            />
            <button
              type="button"
              onClick={fetchCurrentLocation}
              className="px-3 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
            >
              📍 Auto-Locate
            </button>
          </div>

          {suggestions.length > 0 && (
            <ul className="bg-white border rounded shadow max-h-40 overflow-y-auto z-50">
              {suggestions.map((place, idx) => (
                <li
                  key={idx}
                  className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSelectSuggestion(place)}
                >
                  {place.display_name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* 📷 Image Upload Preview */}
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
          className="w-full"
        />
        <div className="flex flex-wrap gap-2">
          {previews.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`preview-${i}`}
              className="w-24 h-24 object-cover rounded"
            />
          ))}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold p-3 rounded"
        >
          {loading ? "Uploading..." : "Add Memory"}
        </button>
      </form>
    </div>
  );
};

export default AddMemory;


