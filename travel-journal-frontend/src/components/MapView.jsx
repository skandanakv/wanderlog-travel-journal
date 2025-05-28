// // src/components/MapView.jsx

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";

// // ✅ Fix Leaflet icon path issue
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
//   iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
//   shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
// });

// const MapView = () => {
//   const [memories, setMemories] = useState([]);

//   const fetchMemories = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const res = await axios.get("http://localhost:5050/api/memories", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setMemories(res.data);
//     } catch (err) {
//       console.error("❌ Error fetching memories for map:", err);
//     }
//   };

//   useEffect(() => {
//     fetchMemories();
//   }, []);

//   return (
//     <div style={{ width: "100%", height: "80vh", minHeight: "400px",background: "lightblue" }}>

//       <MapContainer center={[20, 78]} zoom={2} style={{ height: "100%", width: "100%",minHeight: "400px", zIndex: 0 }}>
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />

//         {memories.map((mem) => {
//           const [lat, lon] = (mem.location || "").split(",");
//           console.log("📍 Rendering marker for:", mem.title, mem.location);

//           if (!lat || !lon || isNaN(parseFloat(lat)) || isNaN(parseFloat(lon))) return null;

//           return (
//             <Marker
//               key={mem._id}
//               position={[parseFloat(lat), parseFloat(lon)]}
//               icon={L.icon({
//                 iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
//                 iconSize: [25, 41],
//                 iconAnchor: [12, 41],
//                 popupAnchor: [1, -34],
//               })}
//             >
//               <Popup>
//                 <div className="text-sm">
//                   <strong>{mem.title}</strong>
//                   <br />
//                   {mem.placeName || "Unknown location"}
//                   <br />
//                   {mem.imageUrls?.[0] && (
//                     <img
//                       src={mem.imageUrls[0]}
//                       alt={mem.title}
//                       className="w-40 h-24 object-cover rounded mt-1"
//                     />
//                   )}
//                 </div>
//               </Popup>
//             </Marker>
//           );
//         })}
//       </MapContainer>
//     </div>
//   );
// };

// export default MapView;











// src/components/MapView.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// ✅ Fix Leaflet icon path issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

// ✅ Component to auto zoom to bounds
const FitToMarkers = ({ positions }) => {
  const map = useMap();

  useEffect(() => {
    if (positions.length > 0) {
      const bounds = L.latLngBounds(positions);
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [positions, map]);

  return null;
};

const MapView = () => {
  const [memories, setMemories] = useState([]);

  const fetchMemories = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:5050/api/memories", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMemories(res.data);
    } catch (err) {
      console.error("❌ Error fetching memories for map:", err);
    }
  };

  useEffect(() => {
    fetchMemories();
  }, []);

  const validPositions = memories
    .map((mem) => {
      const [lat, lon] = (mem.location || "").split(",");
      if (!lat || !lon || isNaN(lat) || isNaN(lon)) return null;
      return [parseFloat(lat), parseFloat(lon)];
    })
    .filter(Boolean);

  return (
    <div style={{ width: "100%", height: "80vh", minHeight: "400px", background: "lightblue" }}>
      <MapContainer
        center={[20, 78]}
        zoom={2}
        style={{ height: "100%", width: "100%", minHeight: "400px", zIndex: 0 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* 🔍 Auto Zoom to Fit All Pins */}
        <FitToMarkers positions={validPositions} />

        {memories.map((mem) => {
          const [lat, lon] = (mem.location || "").split(",");
          console.log("📍 Rendering marker for:", mem.title, mem.location);

          if (!lat || !lon || isNaN(parseFloat(lat)) || isNaN(parseFloat(lon))) return null;

          return (
            <Marker
              key={mem._id}
              position={[parseFloat(lat), parseFloat(lon)]}
              icon={L.icon({
                iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
              })}
            >
              <Popup>
                <div className="text-sm">
                  <strong>{mem.title}</strong>
                  <br />
                  {mem.placeName || "Unknown location"}
                  <br />
                  {mem.imageUrls?.[0] && (
                    <img
                      src={mem.imageUrls[0]}
                      alt={mem.title}
                      className="w-40 h-24 object-cover rounded mt-1"
                    />
                  )}
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default MapView;
