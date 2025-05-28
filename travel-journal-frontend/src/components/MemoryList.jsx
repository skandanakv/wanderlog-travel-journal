
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const [viewing, setViewing] = useState(null); // memory being viewed
// const [viewSlideIndex, setViewSlideIndex] = useState(0); // for carousel


// const MemoryList = () => {
//   const [memories, setMemories] = useState([]);
//   const [activeSlide, setActiveSlide] = useState({});
//   const [editing, setEditing] = useState(null);
//   const [editData, setEditData] = useState({
//     title: "",
//     caption: "",
//     location: "",
//     date: ""
//   });

//   const fetchMemories = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const res = await axios.get("http://localhost:5050/api/memories", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setMemories(res.data);

//       const slideStates = {};
//       res.data.forEach((m) => (slideStates[m._id] = 0));
//       setActiveSlide(slideStates);
//     } catch (err) {
//       console.error("❌ Error fetching memories:", err);
//     }
//   };

//   useEffect(() => {
//     fetchMemories();
//   }, []);

//   const handleNext = (id, total) => {
//     setActiveSlide((prev) => ({
//       ...prev,
//       [id]: (prev[id] + 1) % total,
//     }));
//   };

//   const handlePrev = (id, total) => {
//     setActiveSlide((prev) => ({
//       ...prev,
//       [id]: (prev[id] - 1 + total) % total,
//     }));
//   };

//   const handleDelete = async (id) => {
//     const confirm = window.confirm("Are you sure you want to delete this memory?");
//     if (!confirm) return;

//     try {
//       const token = localStorage.getItem("token");
//       await axios.delete(`http://localhost:5050/api/memories/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       alert("🗑️ Deleted!");
//       fetchMemories();
//     } catch (err) {
//       console.error("❌ Delete failed:", err.message);
//     }
//   };

//   const openEdit = (mem) => {
//     setEditing(mem._id);
//     setEditData({
//       title: mem.title,
//       caption: mem.caption,
//       location: mem.location,
//       date: new Date(mem.date).toISOString().split("T")[0],
//     });
//   };

//   const [newImages, setNewImages] = useState([]);
//   const [previewImages, setPreviewImages] = useState([]);
  
//   const handleNewImageChange = (e) => {
//     const files = Array.from(e.target.files);
//     setNewImages(files);
//     setPreviewImages(files.map(file => URL.createObjectURL(file)));
//   };
  
//   const handleEditSave = async () => {
//     try {
//       const token = localStorage.getItem("token");
  
//       // Upload new images if any
//       let uploadedUrls = [];
//       if (newImages.length > 0) {
//         for (const img of newImages) {
//           const formData = new FormData();
//           formData.append("file", img);
//           formData.append("upload_preset", "dev_unsigned_upload");
  
//           const cloudRes = await axios.post(
//             "https://api.cloudinary.com/v1_1/djpeig9ri/image/upload",
//             formData
//           );
//           uploadedUrls.push(cloudRes.data.secure_url);
//         }
//       }
  
//       // Combine existing + new
//       const memoryToUpdate = memories.find((m) => m._id === editing);
//       const combinedImages = [...(memoryToUpdate.imageUrls || []), ...uploadedUrls];
  
//       await axios.put(`http://localhost:5050/api/memories/${editing}`, {
//         ...editData,
//         imageUrls: combinedImages,
//       }, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
  
//       alert("✅ Memory updated!");
//       setEditing(null);
//       setNewImages([]);
//       setPreviewImages([]);
//       fetchMemories();
//     } catch (err) {
//       console.error("❌ Update failed:", err.message);
//     }
//   };
  

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">🕓 My Timeline</h2>
//       {memories.length === 0 ? (
//         <p className="text-gray-600">No memories yet.</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {memories.map((mem) => {
//             const images = mem.imageUrls || [];
//             const current = activeSlide[mem._id] || 0;

//             return (
//               <div key={mem._id} className="bg-white p-4 rounded shadow relative">
//                 {images.length > 0 && (
//                   <div className="relative mb-2">
//                     <img
//                       src={images[current]}
//                       alt={`memory-${current}`}
//                       className="w-full h-48 object-cover rounded"
//                     />
//                     {images.length > 1 && (
//                       <>
//                         <button
//                           onClick={() => handlePrev(mem._id, images.length)}
//                           className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white px-2 py-1 rounded shadow"
//                         >
//                           ◀
//                         </button>
//                         <button
//                           onClick={() => handleNext(mem._id, images.length)}
//                           className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white px-2 py-1 rounded shadow"
//                         >
//                           ▶
//                         </button>
//                       </>
//                     )}
//                   </div>
//                 )}

//                 {editing === mem._id ? (
//                   <>
//                     <input
//                       className="w-full p-1 border rounded mb-2"
//                       value={editData.title}
//                       onChange={(e) => setEditData({ ...editData, title: e.target.value })}
//                       placeholder="Title"
//                     />
//                     <textarea
//                       className="w-full p-1 border rounded mb-2"
//                       value={editData.caption}
//                       onChange={(e) => setEditData({ ...editData, caption: e.target.value })}
//                       placeholder="Caption"
//                     />
//                     <input
//                       className="w-full p-1 border rounded mb-2"
//                       value={editData.location}
//                       onChange={(e) => setEditData({ ...editData, location: e.target.value })}
//                       placeholder="Location"
//                     />
//                     <input
//                       className="w-full p-1 border rounded mb-2"
//                       type="date"
//                       value={editData.date}
//                       onChange={(e) => setEditData({ ...editData, date: e.target.value })}
//                     />

// <button
//   onClick={() => {
//     setViewing(mem);
//     setViewSlideIndex(0);
//   }}
//   className="bg-blue-500 text-white px-3 py-1 rounded mt-2"
// >
//   🔍 View
// </button>


// <input
//   type="file"
//   accept="image/*"
//   multiple
//   onChange={handleNewImageChange}
//   className="w-full p-2 mb-2 border rounded"
// />
// <div className="flex flex-wrap gap-2">
//   {previewImages.map((src, i) => (
//     <img key={i} src={src} alt={`preview-${i}`} className="w-20 h-20 object-cover rounded" />
//   ))}
// </div>

//                     <div className="flex gap-2">
//                       <button
//                         onClick={handleEditSave}
//                         className="bg-green-500 text-white px-3 py-1 rounded"
//                       >
//                         Save
//                       </button>
//                       <button
//                         onClick={() => setEditing(null)}
//                         className="bg-gray-400 px-3 py-1 rounded"
//                       >
//                         Cancel
//                       </button>
//                     </div>
//                   </>
//                 ) : (
//                   <>
//                     <h3 className="text-lg font-bold mt-2">{mem.title}</h3>
//                     <p className="text-gray-600">{mem.caption}</p>
//                     <p className="text-sm text-indigo-500 mt-1">
//                       📍 {mem.location} | 🗓️{" "}
//                       {new Date(mem.date).toLocaleDateString()}
//                     </p>
//                     <div className="flex justify-end gap-2 mt-4">
//                       <button
//                         onClick={() => openEdit(mem)}
//                         className="bg-yellow-400 hover:bg-yellow-500 px-3 py-1 rounded"
//                       >
//                         ✏️ Edit
//                       </button>
//                       <button
//                         onClick={() => handleDelete(mem._id)}
//                         className="bg-red-500 text-white px-3 py-1 rounded"
//                       >
//                         🗑 Delete
//                       </button>
//                     </div>
//                   </>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </div>

    
//   );
// };

// export default MemoryList;















import React, { useEffect, useState } from "react";
import axios from "axios";

const MemoryList = () => {
  const [memories, setMemories] = useState([]);
  const [activeSlide, setActiveSlide] = useState({});
  const [editing, setEditing] = useState(null);
  const [editData, setEditData] = useState({
    title: "",
    caption: "",
    location: "",
    date: ""
  });

  const [newImages, setNewImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);

  const [viewing, setViewing] = useState(null);
  const [viewSlideIndex, setViewSlideIndex] = useState(0);

  const fetchMemories = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:5050/api/memories", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMemories(res.data);

      const slideStates = {};
      res.data.forEach((m) => (slideStates[m._id] = 0));
      setActiveSlide(slideStates);
    } catch (err) {
      console.error("❌ Error fetching memories:", err);
    }
  };

  useEffect(() => {
    fetchMemories();
  }, []);

  const handleNext = (id, total) => {
    setActiveSlide((prev) => ({
      ...prev,
      [id]: (prev[id] + 1) % total,
    }));
  };

  const handlePrev = (id, total) => {
    setActiveSlide((prev) => ({
      ...prev,
      [id]: (prev[id] - 1 + total) % total,
    }));
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this memory?");
    if (!confirm) return;

    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:5050/api/memories/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("🗑️ Deleted!");
      fetchMemories();
    } catch (err) {
      console.error("❌ Delete failed:", err.message);
    }
  };

  const openEdit = (mem) => {
    setEditing(mem._id);
    setEditData({
      title: mem.title,
      caption: mem.caption,
      location: mem.location,
      date: new Date(mem.date).toISOString().split("T")[0],
    });
  };

  const handleNewImageChange = (e) => {
    const files = Array.from(e.target.files);
    setNewImages(files);
    setPreviewImages(files.map((file) => URL.createObjectURL(file)));
  };

  const handleEditSave = async () => {
    try {
      const token = localStorage.getItem("token");

      let uploadedUrls = [];
      if (newImages.length > 0) {
        for (const img of newImages) {
          const formData = new FormData();
          formData.append("file", img);
          formData.append("upload_preset", "dev_unsigned_upload");

          const cloudRes = await axios.post(
            "https://api.cloudinary.com/v1_1/djpeig9ri/image/upload",
            formData
          );
          uploadedUrls.push(cloudRes.data.secure_url);
        }
      }

      const memoryToUpdate = memories.find((m) => m._id === editing);
      const combinedImages = [...(memoryToUpdate.imageUrls || []), ...uploadedUrls];

      await axios.put(
        `http://localhost:5050/api/memories/${editing}`,
        {
          ...editData,
          imageUrls: combinedImages,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      alert("✅ Memory updated!");
      setEditing(null);
      setNewImages([]);
      setPreviewImages([]);
      fetchMemories();
    } catch (err) {
      console.error("❌ Update failed:", err.message);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">🕓 My Timeline</h2>
      {memories.length === 0 ? (
        <p className="text-gray-600">No memories yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {memories.map((mem) => {
            const images = mem.imageUrls || [];
            const current = activeSlide[mem._id] || 0;

            return (
              <div key={mem._id} className="bg-white p-4 rounded shadow relative w-full min-h-[600px] flex flex-col justify-between">
                {images.length > 0 && (
                  <div className="relative h-72 mb-4 overflow-hidden rounded">
                    <img
                      src={images[current]}
                      alt={`memory-${current}`}
                      className="w-full h-full object-cover"
                    />
                    {images.length > 1 && (
                      <>
                        <button
                          onClick={() => handlePrev(mem._id, images.length)}
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white px-2 py-1 rounded shadow"
                        >
                          ◀
                        </button>
                        <button
                          onClick={() => handleNext(mem._id, images.length)}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white px-2 py-1 rounded shadow"
                        >
                          ▶
                        </button>
                      </>
                    )}
                  </div>
                )}

                {editing === mem._id ? (
                  <>
                    <input
                      className="w-full p-1 border rounded mb-2"
                      value={editData.title}
                      onChange={(e) => setEditData({ ...editData, title: e.target.value })}
                      placeholder="Title"
                    />
                    <textarea
                      className="w-full p-1 border rounded mb-2"
                      value={editData.caption}
                      onChange={(e) => setEditData({ ...editData, caption: e.target.value })}
                      placeholder="Caption"
                    />
                    <input
                      className="w-full p-1 border rounded mb-2"
                      value={editData.location}
                      onChange={(e) => setEditData({ ...editData, location: e.target.value })}
                      placeholder="Location"
                    />
                    <input
                      className="w-full p-1 border rounded mb-2"
                      type="date"
                      value={editData.date}
                      onChange={(e) => setEditData({ ...editData, date: e.target.value })}
                    />
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleNewImageChange}
                      className="w-full p-2 mb-2 border rounded"
                    />
                    <div className="flex flex-wrap gap-2">
                      {previewImages.map((src, i) => (
                        <img
                          key={i}
                          src={src}
                          alt={`preview-${i}`}
                          className="w-20 h-20 object-cover rounded"
                        />
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={handleEditSave}
                        className="bg-green-500 text-white px-3 py-1 rounded"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditing(null)}
                        className="bg-gray-400 px-3 py-1 rounded"
                      >
                        Cancel
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <h3 className="text-lg font-bold mt-2">{mem.title}</h3>
                    <p className="text-gray-600">{mem.caption}</p>
                    {/* <p className="text-sm text-indigo-500 mt-1">
                      // 📍 {mem.location} | 🗓️{" "}
                      {new Date(mem.date).toLocaleDateString()}
                    </p> */<p className="text-sm text-indigo-500 mt-1">
  📍 {mem.placeName || mem.location} | 🗓️ {new Date(mem.date).toLocaleDateString()}
</p>
}
                    <div className="flex justify-end gap-2 mt-4">
                      <button
                        onClick={() => setViewing(mem)}
                        className="flex items-center gap-1 border border-blue-500 text-blue-500 hover:bg-blue-50 px-3 py-1 rounded-full text-sm transition"
                      >
                        🔍 View
                      </button>
                      <button
                        onClick={() => openEdit(mem)}
                        className="flex items-center gap-1 border border-yellow-500 text-yellow-500 hover:bg-yellow-50 px-3 py-1 rounded-full text-sm transition"
                      >
                        ✏️ Edit
                      </button>
                      <button
                        onClick={() => handleDelete(mem._id)}
                        className="flex items-center gap-1 border border-red-500 text-red-500 hover:bg-red-50 px-3 py-1 rounded-full text-sm transition"
                      >
                        🗑 Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* 📸 Fullscreen View Modal */}
      {viewing && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full relative p-6">
            <button
              onClick={() => setViewing(null)}
              className="absolute top-2 right-2 text-xl font-bold text-gray-600 hover:text-black"
            >
              ✖
            </button>

            <h2 className="text-2xl font-bold mb-2">{viewing.title}</h2>
            <p className="mb-1">{viewing.caption}</p>
            <p className="text-sm text-gray-500 mb-2">
              📍 {viewing.location} | 🗓️{" "}
              {new Date(viewing.date).toLocaleDateString()}
            </p>

            {viewing.imageUrls?.length > 0 && (
              <div className="relative">
                <img
                  src={viewing.imageUrls[viewSlideIndex]}
                  alt={`Slide ${viewSlideIndex}`}
                  className="w-full max-h-96 object-contain rounded"
                />
                {viewing.imageUrls.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setViewSlideIndex(
                          (prev) =>
                            (prev - 1 + viewing.imageUrls.length) %
                            viewing.imageUrls.length
                        )
                      }
                      className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white px-2 py-1 rounded shadow"
                    >
                      ◀
                    </button>
                    <button
                      onClick={() =>
                        setViewSlideIndex(
                          (prev) => (prev + 1) % viewing.imageUrls.length
                        )
                      }
                      className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white px-2 py-1 rounded shadow"
                    >
                      ▶
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MemoryList;

