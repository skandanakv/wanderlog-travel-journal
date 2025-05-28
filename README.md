# 🌍 WanderLog – Location-Based Digital Travel Journal

WanderLog is a full-stack travel journal web app that allows users to log, visualize, and revisit their travel memories through an interactive map and timeline. Designed for travelers who love storytelling, nostalgia, and visual journaling.

 ✨ Features

- 📝 Add travel memories with **title, caption, date, image**, and **location**
- 📍 View all memories as **interactive pins on a map**
- 🗂️ See memories in a **timeline-style card list**
- 📸 Upload images (Cloudinary integration)
- 🌐 Location search with autocomplete (OpenStreetMap Nominatim)
- 📌 Browser-based geolocation support
- 🔐 User authentication via JWT
- 🧠 Minimalist UI with Tailwind CSS

🛠️ Tech Stack

**Frontend**  
- React.js  
- Tailwind CSS  
- Leaflet.js (for map view)  

**Backend**  
- Node.js  
- Express.js  
- MongoDB (via Mongoose)

**Authentication**  
- JSON Web Tokens (JWT)

**Location & Maps**  
- Nominatim API (Search/Autocomplete)  
- HTML5 Geolocation API  
- Leaflet.js with OpenStreetMap tiles

**Media Uploads**  
- Images stored via Cloudinary

 🔄 Project Structure
 
 travel-journal-app/
├── client/ # React frontend
├── server/ # Express backend
├── models/ # Mongoose schemas
├── routes/ # API endpoints
├── controllers/ # Logic handling
├── config/ # Cloudinary, DB, JWT
└── README.md

🔓 Future Add-ons

- 📤 Public profile or shareable journal links
- 🎞️ Video upload support
- 🌐 Hosting on Vercel (Frontend) & Render (Backend)
- 🧑‍💼 Admin dashboard for moderation


🚀 Getting Started (Locally)

1. **Clone the repository**
 
   git clone https://github.com/skandanakv/wanderlog-travel-journal.git
   Install dependencies
   
2. **Install Dependencies**
   
cd travel-journal-app
cd client && npm install    # Frontend
cd ../server && npm install # Backend

3. **Set up environment variables**

Create a .env file in the server folder with:
MONGO_URI=your_mongo_db_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

4. **Run the App**
# Start server
cd server && npm run dev

# Start client
cd ../client && npm start

<p align="center">
  <img width="566" alt="Screenshot 1" src="https://github.com/user-attachments/assets/960930ee-55c9-43e3-8815-82e5238525cc" />
</p>

<p align="center">
  <img width="533" alt="Screenshot 2" src="https://github.com/user-attachments/assets/9447aec0-886d-4ed6-8858-efa479709859" />
</p>

<p align="center">
  <img width="623" alt="Screenshot 3" src="https://github.com/user-attachments/assets/d7713348-fe2f-4a53-a79d-de1b737b697c" />
</p>

<p align="center">
  <img width="449" alt="Screenshot 4" src="https://github.com/user-attachments/assets/025708e6-7e16-407d-a545-0b785a8a3e22" />
</p>

<p align="center">
  <img width="499" alt="Screenshot 5" src="https://github.com/user-attachments/assets/54c4286e-8a78-452e-8abb-a146554f2135" />
</p>





📌 Author
👤 Skandana KV
🚀 Full-Stack Developer | Travel Tech Enthusiast




