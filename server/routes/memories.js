// // import express from "express";
// // import Memory from "../models/memory.js";
// // import { verifyToken } from "../middleware/authMiddleware.js";

// // const router = express.Router();



// // // router.post("/", verifyToken, async (req, res) => {
// // //     console.log("🚀 /api/memories POST route called. Request body:", req.body);
// // //     try {
// // //       // const { title, caption, location, imageUrl } = req.body;
// // //       const { title, caption, location, mediaUrls, date } = req.body;

  
// // //       // const newMemory = new Memory({
// // //       //   userId: req.user.id,
// // //       //   title,
// // //       //   caption,
// // //       //   location,
// // //       //   imageUrl
// // //       // });

// // //       const newMemory = new Memory({
// // //         userId: req.user.id,
// // //         title,
// // //         caption,
// // //         location,
// // //         mediaUrls,
// // //         date: new Date(date),
// // //       });
      
  
// // //       const saved = await newMemory.save();
// // //       console.log("✅ Memory saved:", saved);
// // //       res.status(201).json(saved);
// // //     } catch (err) {
// // //       console.error("❌ Error saving memory:", err);
// // //       res.status(500).json({ error: err.message });
// // //     }
// // //   });

// // router.post("/", verifyToken, async (req, res) => {
// //   console.log("🚀 /api/memories POST route called. Request body:", req.body);
// //   try {
// //     const { title, caption, location, imageUrls, date } = req.body;

// //     const newMemory = new Memory({
// //       userId: req.user.id,
// //       title,
// //       caption,
// //       location,
// //       date,
// //       imageUrls, // ✅ save as array
// //     });

// //     const saved = await newMemory.save();
// //     console.log("✅ Memory saved:", saved);
// //     res.status(201).json(saved);
// //   } catch (err) {
// //     console.error("❌ Error saving memory:", err);
// //     res.status(500).json({ error: err.message });
// //   }
// // });


// //   router.get("/", verifyToken, async (req, res) => {
// //     try {
// //       const memories = await Memory.find({ userId: req.user.id }).sort({ createdAt: -1 });
// //       res.json(memories);
// //     } catch (err) {
// //       res.status(500).json({ error: err.message });
// //     }
// //   });

// //   // 🔄 Update a memory
// // // router.put("/:id", verifyToken, async (req, res) => {
// // //     try {
// // //       const updated = await Memory.findOneAndUpdate(
// // //         { _id: req.params.id, userId: req.user.id },
// // //         req.body,
// // //         { new: true }
// // //       );
// // //       if (!updated) return res.status(404).json({ msg: "Memory not found or unauthorized." });
  
// // //       res.json(updated);
// // //     } catch (err) {
// // //       res.status(500).json({ error: err.message });
// // //     }
// // //   });
  
// // router.put("/:id", verifyToken, async (req, res) => {
// //   try {
// //     const updated = await Memory.findOneAndUpdate(
// //       { _id: req.params.id, userId: req.user.id },
// //       req.body,
// //       { new: true }
// //     );
// //     if (!updated) return res.status(404).json({ msg: "Memory not found or unauthorized." });
// //     res.json(updated);
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // });

// //   // 🗑️ Delete a memory
// // // router.delete("/:id", verifyToken, async (req, res) => {
// // //     try {
// // //       const deleted = await Memory.findOneAndDelete({
// // //         _id: req.params.id,
// // //         userId: req.user.id,
// // //       });
// // //       if (!deleted) return res.status(404).json({ msg: "Memory not found or unauthorized." });
  
// // //       res.json({ msg: "Memory deleted successfully." });
// // //     } catch (err) {
// // //       res.status(500).json({ error: err.message });
// // //     }
// // //   });
  
// // router.delete("/:id", verifyToken, async (req, res) => {
// //   try {
// //     const deleted = await Memory.findOneAndDelete({
// //       _id: req.params.id,
// //       userId: req.user.id,
// //     });
// //     if (!deleted) return res.status(404).json({ msg: "Memory not found or unauthorized." });

// //     res.json({ msg: "Memory deleted successfully." });
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // });

  

// // export default router;



























// import express from "express";
// import Memory from "../models/memory.js";
// import { verifyToken } from "../middleware/authMiddleware.js";

// const router = express.Router();

// // 🚀 Create a memory
// router.post("/", verifyToken, async (req, res) => {
//   console.log("🚀 /api/memories POST route called. Request body:", req.body);
//   try {
//     const { title, caption, location, imageUrls, date } = req.body;

//     const newMemory = new Memory({
//       userId: req.user.id,
//       title,
//       caption,
//       location,
//       date: new Date(date),
//       imageUrls, // ✅ store multiple images
//     });

//     const saved = await newMemory.save();
//     console.log("✅ Memory saved:", saved);
//     res.status(201).json(saved);
//   } catch (err) {
//     console.error("❌ Error saving memory:", err);
//     res.status(500).json({ error: err.message });
//   }
// });

// // 📥 Get all memories for a user
// router.get("/", verifyToken, async (req, res) => {
//   try {
//     const memories = await Memory.find({ userId: req.user.id }).sort({ createdAt: -1 });
//     res.json(memories);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // ✏️ Update a memory
// router.put("/:id", verifyToken, async (req, res) => {
//   try {
//     const updated = await Memory.findOneAndUpdate(
//       { _id: req.params.id, userId: req.user.id },
//       req.body,
//       { new: true }
//     );
//     if (!updated) return res.status(404).json({ msg: "Memory not found or unauthorized." });
//     res.json(updated);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // 🗑 Delete a memory
// router.delete("/:id", verifyToken, async (req, res) => {
//   try {
//     const deleted = await Memory.findOneAndDelete({
//       _id: req.params.id,
//       userId: req.user.id,
//     });
//     if (!deleted) return res.status(404).json({ msg: "Memory not found or unauthorized." });

//     res.json({ msg: "Memory deleted successfully." });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// export default router;

















import express from "express";
import Memory from "../models/memory.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// 🧠 Create new memory
router.post("/", verifyToken, async (req, res) => {
  console.log("🚀 /api/memories POST route called. Request body:", req.body);

  try {
    const { title, caption, location, placeName, imageUrls, date } = req.body;

    const parsedDate = date && !isNaN(Date.parse(date))
      ? new Date(date)
      : new Date(); // ✅ fallback to now

    const newMemory = new Memory({
      userId: req.user.id,
      title,
      caption,
      location,
      placeName, // ✅ Now included properly
      imageUrls,
      date: parsedDate,
    });

    const saved = await newMemory.save();
    console.log("📥 Memory incoming:", req.body);
    console.log("✅ Memory saved:", saved);
    res.status(201).json(saved);
  } catch (err) {
    console.error("❌ Error saving memory:", err);
    res.status(500).json({ error: err.message });
  }
});

// 📥 Get all memories for user
router.get("/", verifyToken, async (req, res) => {
  try {
    const memories = await Memory.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json(memories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✏️ Update a memory
router.put("/:id", verifyToken, async (req, res) => {
  try {
    const updated = await Memory.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ msg: "Memory not found or unauthorized." });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🗑 Delete a memory
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    const deleted = await Memory.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.id,
    });
    if (!deleted) return res.status(404).json({ msg: "Memory not found or unauthorized." });

    res.json({ msg: "Memory deleted successfully." });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
