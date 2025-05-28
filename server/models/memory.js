// import mongoose from "mongoose";

// const MemorySchema = new mongoose.Schema(
//   {
//     userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//     title: { type: String, required: true },
//     caption: { type: String },
//     location: { type: String, required: true },
//     imageUrls: { type: String },
//     mediaUrls: { type: [String], required: true },

//     date: { type: Date, default: Date.now }
//   },
//   { timestamps: true }
// );

// export default mongoose.model("Memory", MemorySchema);



import mongoose from "mongoose";

const MemorySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: { type: String, required: true },
    caption: { type: String },
    location: { type: String, required: true },
    imageUrls: {
      type: [String], // ✅ Expecting an array of Cloudinary URLs
      required: true,
    },
    placeName: { type: String },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model("Memory", MemorySchema);
